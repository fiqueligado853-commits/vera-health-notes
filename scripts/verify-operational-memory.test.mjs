import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { test } from "node:test";
import { measureArticle, validateMemory } from "./verify-operational-memory.mjs";

const row = id => "| " + id + " | 2026-11-26 | problem | cause | old | new | files | evidence | status/ref |";
const record1 = row("VHN-MEM-20261126-01");
const record2 = row("VHN-MEM-20261126-02");
const doc = (records, target = "editorial.md") => [
  "## START HERE — VERA HEALTH NOTES",
  "### Protocolo permanente de inicialização",
  "[Read](" + target + ")",
  "### Histórico versionado de aprendizado",
  ...records
].join("\n");

function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "vhn-memory-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  mkdirSync(join(root, "docs"));
  writeFileSync(join(root, "docs", "editorial.md"), "rules");
  return { root, write: text => writeFileSync(join(root, "docs", "operations.md"), text) };
}

test("validates a complete entry point and newly appended record", t => {
  const { root, write } = fixture(t);
  write(doc([record1, record2]));
  assert.deepEqual(validateMemory(root, doc([record1]), ["docs/editorial.md"]), { links: 1, entries: 2 });
});

test("rejects missing dependencies, incomplete or duplicate records", t => {
  const { root, write } = fixture(t);
  write(doc([record1], "missing.md"));
  assert.throws(() => validateMemory(root), /Missing START HERE dependency/);
  write(doc([record1.replace("cause", "")]));
  assert.throws(() => validateMemory(root), /Incomplete learning record/);
  write(doc([record1, record1]));
  assert.throws(() => validateMemory(root), /Duplicate learning record/);
});

test("rejects a rewrite or a changed rule that lacks a new record", t => {
  const { root, write } = fixture(t);
  write(doc([record2]));
  assert.throws(() => validateMemory(root, doc([record1]), ["docs/editorial.md"]), /Preserve prior records/);
  write(doc([record1]));
  assert.throws(() => validateMemory(root, doc([record1]), ["docs/editorial.md"]), /require a new learning record/);
});

test("reports prose counts by section without URLs, image text or bibliography", () => {
  const markdown = "---\r\ntitle: Example\r\n---\r\nA [practical guide](https://example.com).\r\n"
    + "```text\r\n## Example command\r\nThese words do not count.\r\n```\r\n"
    + "## Compare options\r\nUse two examples.\r\n![Ignore alt](picture.webp)\r\n"
    + "## Sources and further reading\r\nOne more link.\r\n";
  assert.deepEqual(measureArticle(markdown), {
    sections: [{ title: "Introduction", words: 3 }, { title: "Compare options", words: 3 }],
    total: 6
  });
  assert.throws(() => measureArticle("No frontmatter"), /Expected YAML frontmatter/);
});
