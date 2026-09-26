import { existsSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import NotionMembers from "./notion-members.mjs";

const outputPath = fileURLToPath(
  new URL("../src/data/members.generated.json", import.meta.url),
);

if (process.env.NOTION_SKIP_SYNC === "1") {
  if (!existsSync(outputPath)) {
    throw new Error(
      "NOTION_SKIP_SYNC=1 was set, but src/data/members.generated.json does not exist.",
    );
  }

  console.log("Skipped Notion sync; using the committed member snapshot.");
  process.exit(0);
}

if (!process.env.NOTION_TOKEN || !process.env.NOTION_MEMBERS_DATA_SOURCE_ID) {
  throw new Error(
    "Missing NOTION_TOKEN or NOTION_MEMBERS_DATA_SOURCE_ID. Copy .env.example to .env and configure the Notion integration.",
  );
}

const teams = await new NotionMembers().getMembers();
const seen = new Set();
let memberCount = 0;

for (const [team, members] of Object.entries(teams)) {
  for (const member of members) {
    if (!team) {
      throw new Error(
        `Member "${member.name || "(unnamed)"}" is missing the Notion property "Team".`,
      );
    }

    if (!member.name) {
      throw new Error(`A member of "${team}" is missing the Notion property "Name".`);
    }

    const key = `${team.toLowerCase()}::${member.name.toLowerCase()}`;
    if (seen.has(key)) {
      throw new Error(`Duplicate member "${member.name}" in "${team}".`);
    }

    seen.add(key);
    memberCount += 1;
  }
}

writeFileSync(outputPath, `${JSON.stringify(teams, null, 2)}\n`);
console.log(
  `Synced ${memberCount} team members across ${Object.keys(teams).length} teams from Notion.`,
);
