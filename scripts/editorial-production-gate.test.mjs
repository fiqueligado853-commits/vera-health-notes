import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { gitBlob, legacy, manuscriptVersion, measureArticle, validateArticle } from "./editorial-production-gate.mjs";

function fixture(t, count, status = "review", stage = "complete") {
  const root = mkdtempSync(join(tmpdir(), "vhn-gate-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const dir = join(root, "src/content/articles");
  mkdirSync(dir, { recursive: true });
  const image = join(dir, "hero.webp");
  writeFileSync(image, "fixture image bytes");
  const data = { id: "VHN-Q-A036", status, format: "D_GUIDE", title: "Title selected",
    description: "A helpful description", hero: { image: "./hero.webp", alt: "Illustration" } };
  const markdown = "---\ntitle: Example\n---\n" + "word ".repeat(count) + "\n\n## Sources\nSources are ignored.";
  const sha = createHash("sha256").update("fixture image bytes").digest("hex");
  const version = manuscriptVersion(markdown, data, sha);
  const plan = { decision: "validated", supplementDecision: "Compare claim", persona: "Shopper",
    intent: "Check a label", hook: "Check this first", originalUtility: "Worked example", narrative: "Case-led",
    visualRationale: "Decision diagram", model: data.format, language: [{ phrase: "exact wording", source: "https://example.com/language" }],
    search: [{ query: "read a supplement label", source: "https://example.com/query" }],
    overlap: [{ id: "VHN-E01", difference: "Different reader task" }],
    headlines: ["Another title", data.title, "Third title", "Fourth title", "Fifth title"], selectedHeadline: data.title, headlineReason: "Specific and honest" };
  const checks = Object.fromEntries("depth originality utility headline hook narrative images seo geo aeo sources links compliance"
    .split(" ").map(key => [key, "Evidence for " + key]));
  const record = { id: data.id, author: "writer", plan, stage, version, checks };
  const input = { path: "A036.md", markdown, data, record, knownIds: new Set(["VHN-E01"]), root };
  const approve = (by = "reviewer") => ({ decision: "approved", by, date: "2026-11-28",
    version, evidence: "https://example.com/decision" });
  return { input, approve, image };
}

test("allows a planned short draft and rejects a draft lacking prewriting evidence", t => {
  const { input } = fixture(t, 465, "draft", "draft");
  assert.equal(validateArticle(input), "draft");
  delete input.record.plan.language;
  assert.throws(() => validateArticle(input), /audience language/);
});

test("requires a justified independent exception below the approved range", t => {
  const { input, approve } = fixture(t, 513);
  assert.throws(() => validateArticle(input), /outside 1200–1500/);
  input.record.lengthException = { ...approve("writer"), reason: "Documented narrow question" };
  assert.throws(() => validateArticle(input), /length exception/);
  input.record.lengthException.by = "editor";
  assert.equal(validateArticle(input), "complete");
});

test("includes both length limits and excludes bibliography", t => {
  for (const count of [1200, 1500]) {
    const { input } = fixture(t, count);
    assert.equal(measureArticle(input.markdown).total, count);
    assert.equal(validateArticle(input), "complete");
  }
  const { input } = fixture(t, 1501);
  assert.throws(() => validateArticle(input), /outside 1200–1500/);
});

test("requires headline rationale and documented checks", t => {
  const { input } = fixture(t, 1210);
  input.record.plan.headlineReason = "";
  assert.throws(() => validateArticle(input), /headline comparison/);
  input.record.plan.headlineReason = "Fits the search intent";
  delete input.record.checks.geo;
  assert.throws(() => validateArticle(input), /incomplete manuscript checklist/);
});

test("rejects stale words, images or review version", t => {
  const { input, image, approve } = fixture(t, 1210, "review", "reviewed");
  input.record.editorial = approve();
  input.record.factual = approve("researcher");
  input.record.specialty = { decision: "not-required", by: "scope-reviewer", date: "2026-11-28", reason: "Document-only scope", version: input.record.version,
    evidence: "https://example.com/scope" };
  assert.equal(validateArticle(input), "reviewed");
  input.record.factual.version = "stale";
  assert.throws(() => validateArticle(input), /factual decision/);
  input.record.factual = approve("researcher");
  input.markdown += "\nChanged copy.";
  assert.throws(() => validateArticle(input), /stale manuscript or hero/);
  input.markdown = input.markdown.replace("\nChanged copy.", "");
  writeFileSync(image, "changed image");
  assert.throws(() => validateArticle(input), /stale manuscript or hero/);
});

test("release requires separate QA, owner approval and qualified specialty when applicable", t => {
  const { input, approve } = fixture(t, 1210, "approved", "approved");
  const version = input.record.version;
  input.data.editorial_review = "approved";
  input.data.source_review = "approved";
  input.data.clinical_review = "approved";
  input.data.published_at = "2026-11-28";
  input.record.editorial = approve("editor");
  input.record.factual = approve("researcher");
  input.record.specialty = { ...approve("clinician"), reason: "Specialty review required" };
  assert.throws(() => validateArticle(input), /qualification/);
  input.record.specialty.qualification = "Verified qualification fixture";
  assert.throws(() => validateArticle(input), /technical and visual QA/);
  input.record.qa = approve("qa");
  assert.throws(() => validateArticle(input), /owner release/);
  input.record.release = approve("owner");
  assert.equal(input.record.release.version, version);
  assert.equal(validateArticle(input), "approved");
});

test("historical baseline uses exact bytes apart from line endings, not the ID", t => {
  const { input } = fixture(t, 465, "draft", "draft");
  input.path = "baseline-test.md";
  legacy[input.path] = gitBlob(input.markdown);
  t.after(() => delete legacy[input.path]);
  assert.equal(validateArticle({ ...input, record: undefined }), "baseline");
  assert.throws(() => validateArticle({ ...input, markdown: input.markdown + "changed", record: undefined }), /editorial record/);
});
