import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { parse } from "yaml";
import { validateArticle } from "./editorial-production-gate.mjs";

export function readManuscripts(root) {
  const dir = join(root, "src/content/articles");
  const articles = readdirSync(dir, { recursive: true }).filter(path => path.endsWith(".md")).map(file => {
    const path = file.replaceAll("\\", "/");
    const markdown = readFileSync(join(dir, file), "utf8");
    const header = markdown.match(/^\uFEFF?---\r?\n([\s\S]+?)\r?\n---\r?\n/)?.[1];
    if (!header) throw new Error("Missing frontmatter: " + path);
    return { path, markdown, data: parse(header, { maxAliasCount: 0 }) };
  });
  return articles;
}

export default function editorialGate() {
  return {
    name: "vera-health-notes-editorial-gate",
    hooks: {
      "astro:build:start": () => {
        const root = process.cwd();
        const articles = readManuscripts(root);
        const knownIds = new Set(articles.map(article => article.data.id));
        if (new Set(articles.map(article => article.data.slug)).size !== articles.length) {
          throw new Error("Duplicate article slug");
        }
        if (knownIds.size !== articles.length) throw new Error("Duplicate article ID");
        const records = JSON.parse(readFileSync(join(root, "docs/editorial/production-records.json"), "utf8"));
        for (const article of articles) {
          validateArticle({ ...article, record: records[article.data.id], knownIds, root });
        }
        console.log("Editorial production gate verified " + articles.length + " manuscripts.");
      }
    }
  };
}
