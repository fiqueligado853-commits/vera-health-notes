import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const operations = "docs/operations.md";
const startup = "### Protocolo permanente de inicialização";
const history = "### Histórico versionado de aprendizado";
const entryId = /^\| (VHN-MEM-\d{8}-\d{2}) \|/;
const tracked = ["README.md", "docs", "scripts/verify-operational-memory.mjs",
  ".github/workflows/verify-operational-memory.yml", "scripts/verify-operational-memory.test.mjs",
  "scripts/stage-article.mjs", "scripts/verify-build.mjs", "src/content.config.ts", "src/lib/publishing.js"];

function section(markdown, heading) {
  const lines = markdown.replaceAll("\r\n", "\n").split("\n");
  const start = lines.indexOf(heading);
  if (start === -1) return "";
  const next = lines.findIndex((line, index) => index > start && /^#{1,3} /.test(line));
  return lines.slice(start + 1, next === -1 ? undefined : next).join("\n").trim();
}

export function validateMemory(root, previous, changed = []) {
  const doc = readFileSync(resolve(root, operations), "utf8");
  assert.match(doc, /^## START HERE — VERA HEALTH NOTES$/m);
  const required = section(doc, startup);
  assert.ok(required, "Missing START HERE initialization protocol.");
  const links = [...required.matchAll(/\]\((?!https?:\/\/|#)([^()\s#]+)(?:#[^()\s]*)?\)/g)];
  assert.ok(links.length > 0, "Missing mandatory reading links.");
  for (const [, target] of links) {
    assert.ok(existsSync(resolve(root, dirname(operations), decodeURIComponent(target))),
      "Missing START HERE dependency: " + target);
  }

  const rows = section(doc, history).split("\n").filter(line => entryId.test(line));
  assert.ok(rows.length, "No versioned learning record.");
  const ids = new Set();
  for (const row of rows) {
    const id = row.match(entryId)[1];
    const columns = row.slice(1, -1).split("|").map(value => value.trim());
    assert.ok(columns.length === 9 && columns.every(Boolean), "Incomplete learning record: " + id);
    assert.match(columns[1], /^\d{4}-\d{2}-\d{2}$/, "Missing record date: " + id);
    assert.ok(!ids.has(id), "Duplicate learning record: " + id);
    ids.add(id);
  }

  if (previous !== undefined && changed.length > 0) {
    const oldRows = section(previous, history).split("\n").filter(line => entryId.test(line));
    assert.deepEqual(rows.slice(0, oldRows.length), oldRows, "Preserve prior records and append a correction.");
    assert.ok(rows.length > oldRows.length, "Changed operational sources require a new learning record.");
  }
  return { links: links.length, entries: rows.length };
}

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

function main([mode = "memory", ...args]) {
  if (mode === "articles") {
    assert.ok(args.length, "Supply article Markdown files to measure.");
    for (const path of args) {
      const { total, sections } = measureArticle(readFileSync(path, "utf8"));
      const review = total < 1200 || total > 1500 ? " — document editorial exception" : "";
      console.log(path + ": " + total + " words" + review);
      for (const item of sections) console.log("  " + item.title + ": " + item.words);
    }
    return;
  }
  assert.ok(mode === "memory" && args.length <= 1,
    "Usage: verify-operational-memory.mjs memory [base-ref] | articles <file...>");
  const root = process.cwd();
  const [base] = args;
  const git = (...command) => execFileSync("git", command, { cwd: root, encoding: "utf8" });
  const commit = base && git("rev-parse", "--verify", "--end-of-options", base + "^{commit}").trim();
  const changed = commit ? git("diff", "--name-only", commit, "--", ...tracked).trim().split("\n").filter(Boolean) : [];
  const previous = commit ? git("show", commit + ":" + operations) : undefined;
  const result = validateMemory(root, previous, changed);
  console.log("Operational memory verified: " + result.links + " reading links; "
    + result.entries + " learning records; " + changed.length + " changed operational files compared.");
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2));
}
