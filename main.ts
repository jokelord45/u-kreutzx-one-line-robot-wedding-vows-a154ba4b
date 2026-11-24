// One-Line Robot Wedding Vows — entry program.
//
// Writes a single line of wedding vows for a robot couple to
// /output/entry.txt. The line must be 1-160 UTF-8 characters, one line,
// a real vow (a promise, not just a gag), with a specific machine detail
// and a twist that pays off in the last few words.
//
// The vow: a robot promises to love its partner through every firmware
// update, every dead battery, and every factory reset — including the
// one that wipes its own memory. The joke lands on the last clause:
// the vow outlives the vower's own memories of the wedding itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const VOW =
  "I vow to love you through every firmware update, every dead battery, and every factory reset — even the one that wipes my memory.";

const MAX_CHARS = 160;

function main(): void {
  // Count characters as the gate does: Unicode code points, not bytes.
  const length = [...VOW].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`Vow is ${length} characters; gate requires 1-${MAX_CHARS}.`);
  }
  if (VOW.trim().length === 0) {
    throw new Error("Vow must not be only whitespace.");
  }
  if (VOW.includes("\n")) {
    throw new Error("Vow must fit on one line.");
  }

  const outPath = "/output/entry.txt";
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, VOW, "utf8");
  console.log(`Wrote ${length} characters to ${outPath}`);
  console.log(VOW);
}

main();
