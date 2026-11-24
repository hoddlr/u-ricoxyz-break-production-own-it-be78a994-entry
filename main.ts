import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ran rm -rf on prod instead of staging, deleted 40,000 user accounts, and my rollback plan was hope.";

// Authored guard: the entry must stay one honest line, under 200 chars.
if (line.length === 0 || line.length >= 200 || line.trim().length === 0) {
  throw new Error("entry line must be non-empty and under 200 characters");
}
if (line.includes("\n") || line.toLowerCase().includes("seamless")) {
  throw new Error("entry line must be a single line without banned filler");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
