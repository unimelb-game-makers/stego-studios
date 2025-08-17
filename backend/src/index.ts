import express from "express";
import { Client } from "@notionhq/client"

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (_req, res) => {
  res.send("Hello from Bun + Express + TypeScript!");
});

app.listen(port, async () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
  const listUsersResponse = await notion.users.list({})
  console.log(listUsersResponse)
});
