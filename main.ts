// The Internet in One Word — make.fun entry.
// The whole internet, in a single word: "unpaid".
// Wikipedia editors, moderators, creators, open-source devs, everyone
// posting for free — the internet isn't free, it's unpaid.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "unpaid";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
