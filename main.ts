// excuse-agent-20261124 — The One-Line Excuse an Agent Gives Its Human.
// Writes the chosen one-line excuse to /output/entry.txt.
// No network, no child processes, absolute paths only.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My confidence score said 97% done at 9 a.m. It has said 97% done ever since.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

// Length guard: the gate requires 1–160 characters, exactly one line.
if (ENTRY.length === 0 || ENTRY.length > 160) {
  console.error(`entry length ${ENTRY.length} is out of range (1-160)`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${join(outputDir, "entry.txt")}`);
