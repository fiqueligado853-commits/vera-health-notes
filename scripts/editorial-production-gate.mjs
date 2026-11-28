import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import { basename, dirname, relative, resolve, sep } from "node:path";

export const legacy = {
  "VHN-E01.md": "25b846a4d7181e2fd6770da4e5f3dabbefd1c011",
  "VHN-E02.md": "35e831064dd3c6abb97adc76014f12e03b49ebe6",
  "VHN-E03.md": "130ba27d6f9dfe8a80cdadcfa88f7d2d1436f4df",
  "VHN-Q-A001.md": "3f80f695cd8be410ec4c810edc232bb959c7ae04",
  "VHN-Q-A003.md": "bb890bc2197a56b61c05efd0ed3aa8bf36b0de3c",
  "VHN-Q-A004.md": "b32135410be016d0a54c31eea05828e7a36ff5ca",
  "VHN-Q-A006.md": "309cefe0f55d884985bb75c99dc906917f0c0b19",
  "VHN-Q-A010.md": "abb4e2f786a783064c67be8e44f9c2ac538fb7b9",
  "VHN-Q-A011.md": "a1426a03062df726bf1284ffa85a7ca2fd1c87a9",
  "VHN-Q-A012.md": "1e240396917d194802f7d0fdefae40911b40fa41",
  "VHN-Q-A013.md": "c9365fde19152c0fc0e4e5fca8b6fca23557b12a",
  "VHN-Q-A014.md": "c222aa7301b432446a6a593776e255c9bb0d4041",
  "VHN-Q-A015.md": "dfaf83e4a2fb3051a8028b3d7f1738e529a0d311",
  "VHN-Q-A016.md": "51c538eeceed5c4539c4251ff3fe9de80a5960a4",
  "VHN-Q-A020.md": "2c7b054541b2e5f01f33ef01007d500b3bfa5c59",
  "VHN-Q-A021.md": "6e881744e3f84b1ad5d99275ab515a5f393263e7",
  "VHN-Q-A022.md": "cb8b35bb93ae1db7c81b5e3b14e57c053a818060",
  "VHN-Q-A023.md": "6cd31d2fc786fb44dd3a46a2918404363b876235",
  "VHN-Q-A024.md": "50f963cd0120096dae75f59768778db6b252844f",
  "VHN-Q-A025.md": "a8dfc2c37d675807bada4036aa37eee840c24693",
  "VHN-Q-A026.md": "eab7f0685689c7ee376115cc6b58926023c55bc8",
  "VHN-Q-A027.md": "c6342a6838c4c888cdf8c6baa589c712a33c4ee2",
  "VHN-Q-A028.md": "130afd85451aa3864d455a657ff3e12b135451ab",
  "VHN-Q-A029.md": "61461d19a8f7059b8a92b8b1aa8b523ab10b078e",
  "VHN-Q-A030.md": "25cc688174a9b3eba6b096b31658d166e2c387dd",
  "VHN-Q-A031.md": "9e967a3a5e85c2bc10f4d6cda5aca372dbbc80e9",
  "VHN-Q-A032.md": "761faaaaaa0efbf0235eb9e8fbee41260a7a63b5",
  "VHN-Q-A033.md": "e1704d6b38ec60ae22581a6aa984f4c3c4788145",
  "VHN-Q-A034.md": "5d182e8c58baad6b2c1440b196c578cfba4df034",
  "VHN-Q-A035.md": "ec20266741b86ab034f407ecb8b007ea1977e421",
  "VHN-VF-A01.md": "d81a3e0da2235fe9e60bf7c3c7f5df7c29805e1b",
  "VHN-VF-A02.md": "46b60f6fa23cf750b154d7be894e7b4326af3f89"
};

const wordSegmenter = new Intl.Segmenter("en-US", { granularity: "word" });

function words(markdown) {
  const prose = markdown
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/<!--[\s\S]*?-->|<\/?[^>\n]+>/g, "")
    .replace(/https?:\/\/\S+/g, "");
  return Array.from(wordSegmenter.segment(prose)).filter(part => part.isWordLike).length;
}

export function measureArticle(markdown) {
  const body = markdown.match(/^\uFEFF?---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]+)$/)?.[1];
  assert.ok(body?.trim(), "Expected YAML frontmatter followed by Markdown.");
  const sections = [];
  let title = "Introduction";
  let lines = [];
  const prose = body.replace(/^[ \t]*([\x60~]{3,})[^\n]*\n[\s\S]*?^[ \t]*\1[^\n]*$/gm, "");
  for (const line of prose.split(/\r?\n/)) {
    const heading = line.match(/^## (.+?)\s*$/)?.[1];
    if (!heading) {
      lines.push(line);
      continue;
    }
    sections.push({ title, words: words(lines.join("\n")) });
    if (/^(?:sources?|references?|sources and further reading|further reading)\s*$/i.test(heading)) {
      return { sections, total: sections.reduce((sum, item) => sum + item.words, 0) };
    }
    title = heading;
    lines = [];
  }
  sections.push({ title, words: words(lines.join("\n")) });
  return { sections, total: sections.reduce((sum, item) => sum + item.words, 0) };
}

export function normalize(text) {
  return text.replaceAll("\r\n", "\n");
}

export function gitBlob(text) {
  const bytes = Buffer.from(normalize(text));
  return createHash("sha1").update("blob " + bytes.length + "\0").update(bytes).digest("hex");
}

export function manuscriptVersion(markdown, data, heroSha256) {
  const { status, editorial_review, source_review, clinical_review, published_at, ...editorial } = data;
  const body = normalize(markdown).match(/^\uFEFF?---\n[\s\S]+?\n---\n([\s\S]+)$/)?.[1];
  assert.ok(body, "Manuscript requires frontmatter and a body");
  const sorted = Object.fromEntries(Object.entries(editorial).sort(([a], [b]) => a.localeCompare(b)));
  return createHash("sha256").update(JSON.stringify(sorted)).update("\0").update(body).update("\0").update(heroSha256).digest("hex");
}

const nonempty = value => typeof value === "string" && value.trim().length > 0;
function https(value) {
  return typeof value === "string" && URL.canParse(value) && new URL(value).protocol === "https:";
}

export function validatePlan(plan, data, knownIds, id) {
  assert.equal(plan?.decision, "validated", id + " prewriting decision");
  for (const key of ["supplementDecision", "persona", "intent", "hook", "originalUtility", "narrative", "visualRationale"]) {
    assert.ok(nonempty(plan[key]), id + " missing prewriting " + key);
  }
  assert.equal(plan.model, data.format, id + " editorial model differs from plan");
  assert.ok(plan.language?.some(sample => nonempty(sample.phrase) && https(sample.source)),
    id + " missing sourced audience language");
  assert.ok(plan.search?.some(sample => nonempty(sample.query) && https(sample.source)),
    id + " missing search evidence");
  assert.ok(plan.overlap?.length && plan.overlap.every(item => knownIds.has(item.id) && nonempty(item.difference)),
    id + " missing inventory overlap check");
  assert.ok(plan.headlines?.length >= 5 && new Set(plan.headlines).size === plan.headlines.length
    && plan.headlines.every(nonempty) && plan.selectedHeadline === data.title
    && plan.headlines.includes(data.title) && nonempty(plan.headlineReason),
    id + " missing headline comparison");
}

const checks = ["depth", "originality", "utility", "headline", "hook", "narrative", "images",
  "seo", "geo", "aeo", "sources", "links", "compliance"];
function approval(record, version, id, label, author) {
  assert.ok(record?.decision === "approved" && record.version === version && https(record.evidence)
    && nonempty(record.by) && record.by !== author && /^\d{4}-\d{2}-\d{2}$/.test(record.date ?? ""),
    id + " missing " + label + " decision for this version");
}

export function validateArticle({ path, markdown, data, record, knownIds, root }) {
  const id = data.id;
  assert.ok(["draft", "review", "approved"].includes(data.status), id + " invalid Astro status");
  if (legacy[path] === gitBlob(markdown)) return "baseline";
  assert.ok(record?.id === id && nonempty(record.author), id + " missing editorial record");
  validatePlan(record.plan, data, knownIds, id);
  if (data.status === "draft" && record.stage === "draft") return "draft";

  assert.ok(["complete", "reviewed", "approved"].includes(record.stage), id + " invalid editorial stage");
  assert.ok(nonempty(data.description) && nonempty(data.hero?.alt) && /\.webp$/i.test(data.hero?.image ?? ""),
    id + " missing description or WebP hero with alt");
  const collectionRoot = resolve(root, "src/content/articles");
  const image = resolve(collectionRoot, dirname(path), data.hero.image);
  const rel = relative(root, image);
  assert.ok(rel !== ".." && !rel.startsWith(".." + sep) && !rel.startsWith(sep) && basename(image) !== "" && existsSync(image),
    id + " hero file does not exist in the repository");

  const heroSha256 = createHash("sha256").update(readFileSync(image)).digest("hex");
  const version = manuscriptVersion(markdown, data, heroSha256);
  assert.equal(record.version, version, id + " stale manuscript or hero version");
  const { total } = measureArticle(markdown);
  if (total < 1200 || total > 1500) {
    assert.ok(nonempty(record.lengthException?.reason), id + " body length " + total + " is outside 1200–1500");
    approval(record.lengthException, version, id, "length exception", record.author);
  }
  assert.ok(checks.every(name => nonempty(record.checks?.[name])), id + " incomplete manuscript checklist");
  if (record.stage === "complete" && data.status === "review") return "complete";
  approval(record.editorial, version, id, "editorial", record.author);
  approval(record.factual, version, id, "factual", record.author);
  assert.ok(nonempty(record.specialty?.reason), id + " missing specialized-review scope");
  if (record.specialty.decision === "approved") {
    approval(record.specialty, version, id, "specialized", record.author);
    assert.ok(nonempty(record.specialty.qualification), id + " missing specialized reviewer qualification");
  } else {
    assert.ok(record.specialty.decision === "not-required" && record.specialty.version === version
      && https(record.specialty.evidence) && nonempty(record.specialty.by) && record.specialty.by !== record.author
      && /^\d{4}-\d{2}-\d{2}$/.test(record.specialty.date ?? ""), id + " missing documented specialty decision for this version");
  }
  if (record.stage === "reviewed" && data.status === "review") return "reviewed";
  assert.equal(record.stage, "approved", id + " invalid promotion");
  assert.equal(data.status, "approved", id + " invalid approval status");
  assert.ok(data.editorial_review === "approved" && data.source_review === "approved"
    && data.clinical_review === record.specialty.decision && data.published_at,
    id + " incomplete Astro publication fields");
  approval(record.qa, version, id, "technical and visual QA", record.author);
  approval(record.release, version, id, "owner release", record.author);
  return "approved";
}
