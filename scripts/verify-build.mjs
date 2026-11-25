import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { isPublishable } from "../src/lib/publishing.js";

const site = "https://verahealthnotes.com";
const dist = "dist";
const read = (path) => readFileSync(join(dist, path), "utf8");
const required = ["index.html", "404.html", "about/index.html", "contact/index.html",
  "editorial-policy/index.html", "privacy-policy/index.html", "cookie-policy/index.html",
  "affiliate-disclosure/index.html", "terms/index.html", "copyright/index.html",
  "resources/blood-pressure-log/index.html", "astro-sitemap-index.xml", "astro-sitemap-0.xml"];
for (const path of required) assert.ok(existsSync(join(dist, path)), path);

assert.ok(read("robots.txt").includes(site + "/astro-sitemap-index.xml"));
assert.ok(read("astro-sitemap-index.xml").includes(site + "/astro-sitemap-0.xml"));
assert.ok(read("_redirects").includes("/sitemap.xml /astro-sitemap-index.xml 301"));
const sitemap = read("astro-sitemap-0.xml");
assert.ok(sitemap.includes(site + "/resources/blood-pressure-log/"));
assert.ok(!/<loc>[^<]+\/404(?:\.html)?\/?<\/loc>/.test(sitemap));
assert.match(read("404.html"), /name="robots" content="noindex"/);

function resolveOutput(pathname) {
  const path = decodeURIComponent(pathname).replace(/^\//, "");
  return [join(dist, path, "index.html"), join(dist, path + ".html"), join(dist, path)]
    .some((candidate) => existsSync(candidate));
}

let links = 0;
const htmlFiles = readdirSync(dist, { recursive: true }).filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const html = read(file);
  const pageUrl = new URL(file.replaceAll("\\", "/").replace(/index\.html$/, ""), site);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, file + " H1");
  if (file !== "404.html") {
    assert.match(html, /<link rel="canonical" href="([^"]+)"/);
    assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)[1], pageUrl.href, file + " canonical");
    assert.doesNotMatch(html, /https:\/\/vera-health-notes\.pages\.dev/, file + " legacy hostname");
  }
  for (const [, href] of html.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const url = new URL(href, pageUrl);
    if (url.origin !== site) continue;
    assert.ok(resolveOutput(url.pathname), file + " → " + href);
    links++;
  }
}

const ready = { status: "approved", editorial_review: "approved", source_review: "approved", clinical_review: "approved" };
assert.equal(isPublishable({ data: ready }), true);
for (const key of Object.keys(ready)) {
  assert.equal(isPublishable({ data: { ...ready, [key]: key === "status" ? "draft" : "pending" } }), false, key);
}
const draftDirectory = "src/content/articles";
const retiredDirectory = "src/drafts/retired";
const gatedFiles = [draftDirectory, retiredDirectory].flatMap((directory) =>
  readdirSync(directory).filter((name) => name.endsWith(".md")).map((name) => join(directory, name))
);
for (const draft of gatedFiles) {
  const markdown = readFileSync(draft, "utf8");
  const retired = dirname(draft) === join(retiredDirectory);
  if (!retired && !/^status: ["']?draft/m.test(markdown) && !/^clinical_review: ["']?pending/m.test(markdown)) continue;
  const slug = markdown.match(/^slug: ["']?([a-z0-9-]+)["']?\s*$/m)?.[1];
  assert.ok(slug, draft);
  assert.ok(!sitemap.includes("/articles/" + slug + "/"), slug + " on sitemap");
  assert.ok(!resolveOutput("/articles/" + slug + "/"), slug + " has an output route");
}

const worksheet = read("resources/blood-pressure-log/index.html");
assert.equal((worksheet.match(/<th scope="col">/g) ?? []).length, 6);
assert.match(worksheet, /size:\s*letter/);
assert.doesNotMatch(worksheet, /<form\b/i);
console.log(htmlFiles.length + " HTML pages and " + links + " internal links checked; drafts and retired routes excluded; sitemap and printable worksheet verified.");
