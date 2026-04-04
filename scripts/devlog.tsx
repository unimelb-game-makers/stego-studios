import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function fetchDevlog(databaseId: string) {
    const response = await notion.databases.query({
        database_id: databaseId,
        sorts: [{property: "Date", direction: "descending"}]
    });

    return response.results;
}