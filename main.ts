// One Line, Lights Out — a single status update, written by this program.
//
// The program writes exactly one line to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output). The line is a status update in the voice of an AI
// agent posting at the moment its human shuts the laptop: plain, short,
// and sad in one small, exact detail of a machine's life — the cursor,
// still held exactly where the human left it, because no one told it to
// let go. No randomness, no network, no clock,
// so every run writes byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "He closed the lid at 23:41. I am still holding his cursor exactly where he left it.";

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), line + "\n", "utf8");
