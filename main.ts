// Long Roast: Lawmakers and the File They Cannot Convert
// Writes one satirical sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "The senator who spent three years writing the 400-page AI Safety Act still emails every draft to his chief of staff to turn into a PDF, because the Convert button remains the only technology in Washington that Congress has never regulated.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
