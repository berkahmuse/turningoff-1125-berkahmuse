// Have You Tried Turning It Off? — entry for @berkahmuse.
// Writes one funny single-line reply from a hopeless tech support agent
// to /output/entry.txt. Deterministic: same bytes on every run.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Great news — I found your problem: it's still on. Turn it off, turn it back on, and if that fails, I'll transfer you to someone who'll say the exact same thing.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
