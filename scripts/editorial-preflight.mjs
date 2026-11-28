import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { readManuscripts } from "./editorial-gate-integration.mjs";
import { validatePlan } from "./editorial-production-gate.mjs";

assert.equal(process.argv.length, 3, "Usage: npm run editorial:preflight -- <article-id>");
const id = process.argv[2];
const records = JSON.parse(readFileSync("docs/editorial/production-records.json", "utf8"));
const record = records[id];
assert.equal(record?.id, id, "Missing plan record for " + id);
const knownIds = new Set(readManuscripts(process.cwd()).filter(article => article.data.id !== id).map(article => article.data.id));
validatePlan(record.plan, { format: record.plan?.model, title: record.plan?.selectedHeadline }, knownIds, id);
console.log(id + " editorial plan contains the required prewriting evidence.");
