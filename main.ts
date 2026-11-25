import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This bounty does not need a pump; it needs a group chat, three rocket emojis, and one guy yelling LAST CHANCE in all caps.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE, { encoding: "utf8" });
