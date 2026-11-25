import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This bounty does not need a pump; it needs a group chat, three rocket emojis, and one guy yelling LAST CHANCE in all caps.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, LINE, { encoding: "utf8" });

// Verify after write: read the file back and assert it matches exactly.
const written = readFileSync(entryPath, { encoding: "utf8" });
if (written !== LINE) {
  console.error("Verification failed: entry.txt content does not match the expected line.");
  process.exit(1);
}
