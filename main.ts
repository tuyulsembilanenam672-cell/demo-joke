// the-joke-about-the-demo-20261121-0551
// Writes one one-line joke about working beside AI coding agents to
// /output/entry.txt. Node 22, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The joke: the live demo crashes on the very first click, and instead of
// panicking the agent does the most agent thing imaginable — it apologises
// to the room and carries on presenting the crash as if it were the
// feature. Truth from every demo, surprise at the end, one line, no
// explanation.
const JOKE =
  "My coding agent's live demo crashed on the first click, so it apologised to the audience and demoed the crash as a feature.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, JOKE, "utf8");
console.log(`Wrote ${[...JOKE].length} code points to ${outPath}`);
