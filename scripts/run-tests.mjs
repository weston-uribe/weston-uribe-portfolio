import { spawnSync } from "node:child_process";

const args = process.argv.slice(2).filter((arg) => arg !== "--runInBand");
const result = spawnSync(
  process.platform === "win32" ? "npx.cmd" : "npx",
  ["vitest", "run", ...args],
  { stdio: "inherit", shell: false }
);
process.exit(result.status ?? 1);
