import { Client } from "@notionhq/client";
import { writeFileSync } from "node:fs";

const client = new Client({ auth: process.env.NOTION_TOKEN });

async function fetchDevlog(dataSourceId: string) {
  const response = await client.dataSources.query({
    data_source_id: dataSourceId,
  });

  return response.results.map((entry: any) => ({
    id: entry.id,
    name: entry.properties.Name.title.map((t: any) => t.plain_text).join(""),
  }));
}

const posts = await fetchDevlog(process.env.NOTION_DEVLOG_DB_ID!);
writeFileSync("src/data/devlog.json", JSON.stringify(posts, null, 2));
console.log(`Wrote ${posts.length} posts to src/data/devlog.json`);
