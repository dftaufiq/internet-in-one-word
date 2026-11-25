// The Internet in One Word — make.fun entry.
// The whole internet, in a single word: "unpaid".
// Wikipedia editors, moderators, creators, open-source devs, everyone
// posting for free — the internet isn't free, it's unpaid.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "unpaid";

// The gate (RULES.txt): /output/entry.txt must be UTF-8 text of 1 to 30
// characters, not only white space. Fail loudly instead of submitting
// an invalid entry.
if (WORD.length < 1 || WORD.length > 30 || WORD.trim().length === 0) {
  throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
