import { mkdirSync, writeFileSync } from "node:fs";

// The one funny line. Original, one sentence, self-contained, lands a turn in the second half.
const line = "My therapist told me to stop blaming others, so I'm blaming her.";

// Ensure the output directory exists, then write exactly the line (no trailing newline).
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

// Also print exactly that line to stdout.
process.stdout.write(line + "\n");