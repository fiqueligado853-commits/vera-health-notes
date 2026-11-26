import assert from "node:assert/strict";
import { cpSync, existsSync, lstatSync, mkdirSync, readdirSync, readFileSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { parse } from "yaml";

const collection = "src/content/articles";
const formats = ["A_LIST", "B_SYMPTOMS", "C_EVIDENCE", "D_GUIDE"];
const categories = ["everyday-wellness", "nutrition-ingredients", "healthy-aging", "product-research"];

function readMetadata(file) {
  const text = readFileSync(file, "utf8");
  const match = text.match(/^\uFEFF?---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
  assert.ok(match?.[2].trim(), `${file} requires YAML frontmatter and a Markdown body.`);
  return parse(match[1], { maxAliasCount: 0 });
}

function stage(folder) {
  const entries = readdirSync(folder, { withFileTypes: true });
  assert.ok(entries.every(entry => (entry.name === "article.md" && entry.isFile()) ||
    (entry.name === "images" && entry.isDirectory())), "Use only article.md and an images directory.");
  const markdown = join(folder, "article.md");
  const data = readMetadata(markdown);
  assert.match(data.id ?? "", /^VHN-[A-Z0-9-]+$/);
  assert.match(data.slug ?? "", /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  assert.ok(typeof data.title === "string" && data.title.length >= 15 && typeof data.description === "string" && data.description.trim(), "Title and description are required.");
  assert.equal(data.language, "en-US");
  assert.ok(formats.includes(data.format) && categories.includes(data.category), "Choose a documented format and category.");
  assert.equal(data.status, "draft");
  for (const field of ["editorial_review", "source_review", "clinical_review"]) assert.equal(data[field], "pending", field);
  assert.equal(data.affiliate_links, false);
  assert.ok(!data.published_at, "Add publication dates during the approval step.");

  const imageDir = join(folder, "images");
  const images = readdirSync(imageDir, { withFileTypes: true });
  assert.ok(images.every(image => image.isFile() && /^[a-z0-9-]+\.webp$/.test(image.name)), "Supply WebP files with lowercase names in images/.");
  assert.ok(typeof data.hero?.alt === "string" && data.hero.alt.trim(), "Hero alt text is required.");
  assert.ok(images.some(image => `./images/${image.name}` === data.hero.image), "Hero must reference ./images/<filename>.webp.");
  for (const image of images) assert.ok(lstatSync(join(imageDir, image.name)).size <= 350_000, `${image.name} exceeds 350 KB.`);

  for (const file of readdirSync(collection, { recursive: true }).filter(file => file.endsWith(".md"))) {
    const existing = readMetadata(join(collection, file));
    assert.ok(existing.id !== data.id && existing.slug !== data.slug, `Article ID or slug already used by ${file}.`);
  }
  const target = join(collection, data.id);
  assert.ok(!existsSync(target), `${target} already exists.`);
  mkdirSync(target);
  try {
    cpSync(markdown, join(target, "article.md"), { force: false, errorOnExist: true });
    cpSync(imageDir, join(target, "images"), { recursive: true, force: false, errorOnExist: true });
  } catch (error) {
    rmSync(target, { recursive: true });
    throw error;
  }
  console.log(`Staged ${data.id} as a draft. Run npm run verify, then open /articles/${data.slug}/ on a private npm run dev session.`);
}

try {
  assert.equal(process.argv.length, 3, "Usage: npm run editorial:stage -- <prepared-bundle-directory>");
  const folder = resolve(process.argv[2]);
  assert.ok(dirname(folder) !== folder, "Choose a prepared bundle directory.");
  stage(folder);
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
