import assert from "node:assert/strict";
import { setTimeout as wait } from "node:timers/promises";
const domain = "https://verahealthnotes.com";
const routes = [["A021","How to Verify a Third-Party Tested Supplement Before You Buy","verify-third-party-tested-supplement"],["A022","What Does “Clinically Tested” Mean on a Supplement Ad?","clinically-tested-supplement-claim"],["A023","Does an FDA-Registered Facility Mean a Supplement Is FDA Approved?","fda-registered-facility-supplement"],["A024","Supplement Free Trials and Auto-Delivery: What to Check Before You Pay","supplement-free-trial-auto-delivery-checkout"],["A025","How to Request a Supplement Refund Under a Money-Back Guarantee","supplement-money-back-guarantee-refund"]];
const excluded = ["everyday-foods-surprisingly-high-in-sodium","why-your-legs-may-feel-heavy-after-sitting-all-day","why-do-your-ankles-look-more-swollen-at-night","heavy-legs-after-work-what-might-be-worth-paying-attention-to","does-walking-after-dinner-really-make-a-difference","what-does-the-research-actually-say-about-garlic-and-heart-health","garlic-in-food-vs-garlic-supplements-what-changes","why-blood-pressure-readings-differ"];
const path = slug => "/articles/" + slug + "/";
const request = url => fetch(url, { redirect: "follow", signal: AbortSignal.timeout(15000), cache: "no-store" });
const unzipTitle = text => text.replaceAll("&#34;", '"').replaceAll("&quot;", '"').replaceAll("&#39;", "'").replaceAll("&amp;", "&");

async function verify() {
  const idx = await request(domain + "/astro-sitemap-index.xml");
  assert.equal(idx.status, 200, "Sitemap index");
  const sitemapUrls = [...(await idx.text()).matchAll(/<loc>(https:\/\/verahealthnotes\.com\/[^<]+)<\/loc>/g)].map(m => m[1]);
  assert.ok(sitemapUrls.length, "No public sitemap child");
  const sitemaps = (await Promise.all(sitemapUrls.map(async url => {
    const response = await request(url);
    assert.equal(response.status, 200, url);
    return response.text();
  }))).join("\n");
  const included = new Set([...sitemaps.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]));
  const linkTargets = new Set();
  for (const [id, title, slug] of routes) {
    const url = domain + path(slug);
    const response = await request(url);
    assert.equal(response.status, 200, url);
    assert.equal(response.url, url, "Unexpected redirect");
    const html = await response.text();
    assert.equal(unzipTitle(html.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1] ?? ""), title, "H1 " + id);
    assert.equal(html.match(/<link rel="canonical" href="([^"]+)"/)?.[1], url, "Canonical " + id);
    assert.doesNotMatch(response.headers.get("x-robots-tag") ?? "", /noindex/i, "HTTP noindex " + id);
    assert.doesNotMatch(html, /<meta[^>]+name="(?:robots|googlebot)"[^>]+content="[^"]*noindex/i, "HTML noindex " + id);
    assert.ok(included.has(url), "Sitemap inclusion " + id);
    assert.match(html, /"@type":"Article"/, "Article schema " + id);
    const hero = html.match(/<img\b(?=[^>]*class="[^"]*article-hero)([^>]+)>/);
    assert.ok(hero?.[1], "Hero " + id);
    const src = hero[1].match(/\bsrc="([^"]+)"/)?.[1];
    assert.ok(src && /\balt="[^"]+"/.test(hero[1]), "Hero src and alt " + id);
    const media = await request(new URL(src, url));
    assert.equal(media.status, 200, "Hero HTTP " + id);
    assert.match(media.headers.get("content-type") ?? "", /^image\/webp/i, "Hero MIME " + id);
    const bytes = new Uint8Array(await media.arrayBuffer());
    assert.ok(new TextDecoder().decode(bytes.slice(0, 12)).startsWith("RIFF"), "Hero bytes " + id);
    const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0] ?? "";
    for (const [, href] of article.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
      const target = new URL(href, url);
      if (target.origin === domain && href.startsWith("#")) {
        assert.ok(html.includes('id="' + decodeURIComponent(target.hash.slice(1)) + '"'), href);
      }
      if (target.origin === domain && target.href !== url) {
        target.hash = "";
        linkTargets.add(target.href);
      }
    }
    console.log(id + " HTTP 200; canonical, sitemap, indexable HTML/HTTP, schema, hero and anchors verified " + url);
  }
  await Promise.all([...linkTargets].map(async u => assert.equal((await request(u)).status, 200, u)));
  await Promise.all(excluded.map(async slug => {
    const u = domain + path(slug);
    assert.ok(!included.has(u), "Excluded from sitemap " + u);
    assert.equal((await request(u)).status, 404, "Expected HTTP 404 " + u);
  }));
  console.log("Verified " + linkTargets.size + " distinct internal destinations and " + excluded.length + " excluded routes.");
}
for (let attempt = 1; attempt <= 20; attempt++) {
  try {
    await verify();
    break;
  } catch (problem) {
    console.log("Attempt " + attempt + ": " + problem.message);
    if (attempt === 20) throw problem;
    await wait(15000);
  }
}
