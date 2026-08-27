import { existsSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import NotionGames from "./notion-games.mjs";

const outputPath = fileURLToPath(
  new URL("../src/data/games.generated.json", import.meta.url),
);

if (process.env.NOTION_SKIP_SYNC === "1") {
  if (!existsSync(outputPath)) {
    throw new Error(
      "NOTION_SKIP_SYNC=1 was set, but src/data/games.generated.json does not exist.",
    );
  }

  console.log("Skipped Notion sync; using the committed game snapshot.");
  process.exit(0);
}

if (!process.env.NOTION_TOKEN || !process.env.NOTION_GAMES_DATA_SOURCE_ID) {
  throw new Error(
    "Missing NOTION_TOKEN or NOTION_GAMES_DATA_SOURCE_ID. Copy .env.example to .env and configure the Notion integration.",
  );
}

const games = await new NotionGames().getGames();
const slugs = new Set();

for (const game of games) {
  if (!game.slug || slugs.has(game.slug)) {
    throw new Error(`Duplicate or empty game slug generated for "${game.title}".`);
  }
  slugs.add(game.slug);
}

writeFileSync(outputPath, `${JSON.stringify(games, null, 2)}\n`);
console.log(`Synced ${games.length} featured games from Notion.`);

