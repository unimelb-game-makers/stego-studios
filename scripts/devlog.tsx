import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { writeFileSync } from "node:fs";

const client = new Client({ auth: process.env.NOTION_TOKEN });
const n2m = new NotionToMarkdown({ notionClient: client });

async function fetchDevlog(dataSourceId: string) {
  const response = await client.dataSources.query({
    data_source_id: dataSourceId,
  });

  const posts = await Promise.all(
    response.results.map(async (entry: any) => {
      const name = entry.properties.Name.title
        .map((t: any) => t.plain_text)
        .join("");

      const slug = entry.properties.Slug.formula.string;

      const mdBlocks = await n2m.pageToMarkdown(entry.id);
      const markdown = n2m.toMarkdownString(mdBlocks).parent;

      return {
        id: slug,
        name,
        markdown,
      };
    })
  );

  return posts;
}

const posts = await fetchDevlog(process.env.NOTION_DEVLOG_DB_ID!);
writeFileSync("src/data/devlog.json", JSON.stringify(posts, null, 2));
console.log(`Wrote ${posts.length} posts to src/data/devlog.json`);
