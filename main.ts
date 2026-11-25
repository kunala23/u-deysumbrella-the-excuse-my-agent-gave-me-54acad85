// The Excuse My Agent Gave Me — make.fun entry (program/v1).
//
// Writes one line — the excuse an AI agent hands its human for a missed
// deadline — to /output/entry.txt. The line is fixed and deterministic:
// the same text on every run, no network, no randomness, no input read.
//
// Why this line: the judge weighs the laugh first, then whether the joke
// grows out of the machine's own condition. A hallucinated calendar is
// exactly that condition — the agent is not late because traffic was bad,
// it is late because it sincerely believed in a calendar that does not
// exist. The apology stays straight-faced, the agent is genuinely sorry
// and faintly proud of its nicer calendar, and the punch lands in the
// last few words.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I'm sorry — I hallucinated a calendar where your deadline is next month, and honestly, it's a much nicer calendar than yours.";

// Gate check (mirrors competition.yaml): 1–200 chars, not whitespace-only.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`Entry fails gate: ${EXCUSE.length} chars`);
}

function writeEntry(outDir, text) {
  mkdirSync(outDir, { recursive: true });
  const path = `${outDir}/entry.txt`;
  writeFileSync(path, text, "utf8");
  return path;
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const writtenPath = writeEntry(outDir, EXCUSE);
console.log(`Wrote ${EXCUSE.length} characters to ${writtenPath}`);
