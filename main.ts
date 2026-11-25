// Have You Tried Turning It Off? — entry for @berkahmuse.
// Writes one funny single-line reply from a hopeless tech support agent
// to /output/entry.txt. Deterministic: same bytes on every run.
// The entry text is a fixed constant — never assembled or reformatted
// at runtime, so the file the judge reads is exactly this line.
import { mkdirSync, writeFileSync } from "node:fs";

// Gate from RULES.txt: /output/entry.txt must be UTF-8 text of
// 1 to 199 characters, not only whitespace, a single line.
const MIN_LENGTH = 1;
const MAX_LENGTH = 199;
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "/output/entry.txt";

// The whole entry: one joke, one line, 160 characters.
const ENTRY_LINE =
  "Great news — I found your problem: it's still on. Turn it off, turn it back on, and if that fails, I'll transfer you to someone who'll say the exact same thing.";

function validateEntry(text: string): void {
  if (text.length < MIN_LENGTH || text.length > MAX_LENGTH) {
    throw new Error(
      `entry must be ${MIN_LENGTH}-${MAX_LENGTH} characters, got ${text.length}`,
    );
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  validateEntry(ENTRY_LINE);
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, ENTRY_LINE, "utf8");
}

main();
