import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { createRequire } from "node:module";
import { parse } from "yaml";
import { isPublishable } from "../src/lib/publishing.js";

const { chromium } = createRequire(import.meta.url)("playwright");
const base = process.env.VHN_QA_URL ?? "http://127.0.0.1:4321";
const collection = "src/content/articles";
const paths = (await readdir(collection)).filter(name => /^VHN-Q-A\d{3}\.md$/.test(name));

const articles = [];
const allArticles = [];
for (const name of await readdir(collection, { recursive: true })) {
  if (!name.endsWith(".md")) continue;
  const file = join(collection, name);
  const markdown = await readFile(file, "utf8");
  const [, header, body] = markdown.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]+)$/) ?? [];
  assert.ok(header && body?.trim(), file);
  const data = parse(header);
  allArticles.push(data);
  if (!paths.includes(name) || isPublishable({ data })) continue;
  assert.equal(data.language, "en-US", file);
  assert.equal(data.affiliate_links, false, file);
  assert.ok(data.description?.trim() && data.hero?.alt?.trim(), file);
  assert.match(body, /^## Sources/m, file);
  assert.doesNotMatch(body, /\b(?:TODO|TBD|PLACEHOLDER)\b/i, file);
  const imagePaths = [data.hero.image, ...Array.from(body.matchAll(/!\[[^\]]+\]\(([^)]+\.webp)\)/g), match => match[1])];
  for (const imagePath of imagePaths) {
    assert.match(imagePath, /\.webp$/i, file);
    const image = await readFile(resolve(dirname(file), imagePath));
    assert.equal(image.toString("ascii", 0, 4), "RIFF", imagePath);
    assert.equal(image.toString("ascii", 8, 12), "WEBP", imagePath);
    assert.ok(image.length <= 350_000, imagePath + " exceeds the image size target");
  }
  articles.push({ file, data, imageCount: imagePaths.length });
}

if (process.env.VHN_QA_EXPECTED_DRAFTS) {
  assert.equal(articles.length, Number(process.env.VHN_QA_EXPECTED_DRAFTS), "Unexpected number of gated articles.");
  assert.ok(articles.every(({ data }) => data.status === "draft"), "The review batch must stay in draft.");
}

for (const field of ["id", "slug", "title"]) {
  assert.equal(new Set(allArticles.map(data => data[field])).size, allArticles.length, "Duplicate article " + field);
}
assert.equal(new Set(articles.map(({ data }) => data.description)).size, articles.length);
const articleById = new Map(allArticles.map(data => [data.id, data]));
const draftPaths = new Set(articles.map(({ data }) => "/articles/" + data.slug + "/"));
const browser = await chromium.launch({ executablePath: process.env.VHN_QA_CHROMIUM || undefined });
try {
  const verifiedLinks = new Set();
  for (const width of [1440, 390, 320]) {
    const page = await browser.newPage({ viewport: { width, height: 900 } });
    for (const { file, data, imageCount } of articles) {
      const label = file + " at " + width + " px";
      const route = "/articles/" + data.slug + "/";
      const response = await page.goto(base + route, { waitUntil: "load" });
      assert.equal(response?.status(), 200, label);
      for (const image of await page.locator(".article-hero,.article-copy img").all()) {
        await image.scrollIntoViewIfNeeded({ timeout: 10_000 });
        await image.evaluate(element => {
          const timeout = new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Could not decode " + element.alt)), 10_000);
          });
          return Promise.race([element.decode(), timeout]);
        });
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      const information = await page.evaluate(() => {
        const article = document.querySelector(".editorial-article");
        const copy = document.querySelector(".article-copy");
        const contents = document.querySelector(".article-contents");
        const hero = document.querySelector("img.article-hero");
        const footer = document.querySelector("footer");
        const articleLinks = Array.from(article.querySelectorAll("a[href]"), a => a.getAttribute("href"));
        const headings = Array.from(copy.querySelectorAll("h2,h3"), heading => ({
          depth: Number(heading.tagName.slice(1)),
          id: heading.id,
          text: heading.textContent.trim()
        }));
        const anchors = Array.from(contents.querySelectorAll('a[href^="#"]'), a => decodeURIComponent(a.hash.slice(1)));
        return {
          lang: document.documentElement.lang,
          title: document.title,
          description: document.querySelector('meta[name="description"]')?.content,
          robots: document.querySelector('meta[name="robots"]')?.content,
          canonical: document.querySelectorAll('link[rel="canonical"], meta[property="og:url"]').length,
          schema: document.querySelectorAll('script[type="application/ld+json"]').length,
          h1: Array.from(document.querySelectorAll("h1"), heading => heading.textContent.trim()),
          preview: Boolean(article.querySelector(".preview-status")),
          format: article.dataset.format,
          headings,
          anchors,
          allAnchorsResolve: anchors.every(id => document.getElementById(id)),
          links: articleLinks,
          related: Array.from(article.querySelectorAll(".article-ending a[href^='/articles/']"), a => a.pathname),
          hero: { alt: hero.alt, loaded: hero.complete && hero.naturalWidth > 0, width: hero.clientWidth, height: hero.clientHeight, naturalRatio: hero.naturalWidth / hero.naturalHeight, fit: getComputedStyle(hero).objectFit },
          images: Array.from(article.querySelectorAll(".article-hero,.article-copy img"), image => ({ alt: image.alt, loaded: image.complete && image.naturalWidth > 0 })),
          horizontalOverflow: document.documentElement.scrollWidth - window.innerWidth,
          tocLeft: contents.getBoundingClientRect().left < copy.getBoundingClientRect().left,
          tocAbove: contents.getBoundingClientRect().bottom <= copy.getBoundingClientRect().top + 1,
          footerVisible: footer.getBoundingClientRect().height > 0 && Boolean(footer.querySelector('a[href="/editorial-policy/"]'))
        };
      });

      assert.deepEqual(information.h1, [data.title], label);
      assert.equal(information.lang, "en-US", label);
      assert.equal(information.title, data.title + " | Vera Health Notes", label);
      assert.equal(information.description, data.description, label);
      assert.equal(information.robots, "noindex", label);
      assert.equal(information.canonical, 0, label);
      assert.equal(information.schema, 0, label);
      assert.equal(information.format, data.format, label);
      assert.ok(information.preview && information.footerVisible, label);
      assert.ok(information.horizontalOverflow <= 1, label + " horizontal overflow");
      assert.ok(width === 1440 ? information.tocLeft : information.tocAbove, label + " misplaced contents");
      assert.ok(information.allAnchorsResolve, label);
      assert.deepEqual(information.anchors, information.headings.filter(item => item.depth === 2).map(item => item.id), label);
      assert.ok(information.anchors.length >= 4, label);
      assert.ok(information.headings.every(item => item.id && item.text), label);
      assert.equal(new Set(information.headings.map(item => item.id)).size, information.headings.length, label);
      assert.equal(information.headings[0].depth, 2, label);
      assert.ok(information.hero.loaded && information.hero.alt === data.hero.alt, label);
      const ratio = information.hero.width / information.hero.height;
      const expectedRatio = data.hero.fit === "contain" ? information.hero.naturalRatio : width <= 600 ? 1.5 : 2;
      assert.ok(Math.abs(ratio - expectedRatio) < 0.04, label + " hero ratio");
      assert.equal(information.hero.fit, data.hero.fit ?? "cover", label + " hero fit");
      assert.equal(information.images.length, imageCount, label);
      assert.ok(information.images.every(image => image.alt && image.loaded), label);
      for (const id of data.related_ids) assert.ok(articleById.has(id), label + " related ID " + id);
      assert.ok(information.related.includes("/articles/"), label);
      assert.ok(information.related.every(path => !draftPaths.has(path)), label + " leaks related drafts");

      assert.ok(information.links.some(href => href.startsWith("https://")), label + " missing linked sources");
      for (const href of information.links.filter(value => value.startsWith("/"))) {
        if (verifiedLinks.has(href)) continue;
        assert.ok((await page.request.get(base + href)).ok(), label + " broken internal link " + href);
        verifiedLinks.add(href);
      }
      console.log("PASS " + route + " " + width + "px (" + data.format + ", " + information.anchors.length + " headings, " + imageCount + " images)");
    }
    await page.close();
  }
  console.log("Verified " + articles.length * 3 + " draft page renders across desktop and mobile.");
} finally {
  await browser.close();
}
