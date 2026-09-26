import { Client } from "@notionhq/client";

const joinPlainText = (items) =>
  items.map((item) => item.plain_text).join("").trim();

const readTitle = (properties, name) => {
  const property = properties[name];
  return property?.type === "title" ? joinPlainText(property.title) : "";
};

const readText = (properties, name) => {
  const property = properties[name];
  return property?.type === "rich_text"
    ? joinPlainText(property.rich_text)
    : "";
};

const readSelect = (properties, name) => {
  const property = properties[name];
  return property?.type === "select" ? property.select?.name ?? "" : "";
};

const readMultiSelect = (properties, name) => {
  const property = properties[name];
  return property?.type === "multi_select"
    ? property.multi_select.map((option) => option.name)
    : [];
};

const readUrl = (properties, name) => {
  const property = properties[name];
  return property?.type === "url" ? property.url ?? undefined : undefined;
};

const readDate = (properties, name) => {
  const property = properties[name];
  return property?.type === "date" ? property.date?.start : undefined;
};

const readNumber = (properties, name) => {
  const property = properties[name];
  return property?.type === "number" ? property.number ?? 0 : 0;
};

const slugify = (value) =>
  value
    .normalize("NFKD")
    .toLowerCase()
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const requireValue = (value, propertyName, gameTitle) => {
  if (Array.isArray(value) ? value.length === 0 : !value) {
    throw new Error(
      `Featured game "${gameTitle}" is missing the Notion property "${propertyName}".`,
    );
  }

  return value;
};

export default class NotionGames {
  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async getGames() {
    const dataSourceId = process.env.NOTION_GAMES_DATA_SOURCE_ID;

    if (!process.env.NOTION_TOKEN || !dataSourceId) {
      return [];
    }

    const pages = [];
    let startCursor;

    do {
      const response = await this.client.dataSources.query({
        data_source_id: dataSourceId,
        filter: {
          property: "Featured on Website",
          checkbox: { equals: true },
        },
        sorts: [{ property: "Website Order", direction: "ascending" }],
        start_cursor: startCursor,
      });

      pages.push(...response.results);
      startCursor = response.has_more
        ? response.next_cursor ?? undefined
        : undefined;
    } while (startCursor);

    return pages
      .map((page) => NotionGames.toGame(page))
      .sort((a, b) => a.order - b.order);
  }

  static toGame(page) {
    if (!("properties" in page)) {
      throw new Error(`Unexpected Notion result type for ${page.id}.`);
    }

    const { properties } = page;
    const title = requireValue(
      readTitle(properties, "Game title"),
      "Game title",
      page.id,
    );

    return {
      id: page.id,
      notionUrl: page.url,
      slug: slugify(title),
      title,
      tags: requireValue(readMultiSelect(properties, "Genre"), "Genre", title),
      team: requireValue(readSelect(properties, "Team "), "Team ", title),
      gameDescription: requireValue(
        readText(properties, "Description"),
        "Description",
        title,
      ),
      gifFeature: {
        title: "Features",
        description: requireValue(
          readText(properties, "Website Features"),
          "Website Features",
          title,
        ),
      },
      gifDescription: {
        title: "About the Game",
        description: requireValue(
          readText(properties, "Website About"),
          "Website About",
          title,
        ),
      },
      gifStory: {
        title: "Story",
        description: requireValue(
          readText(properties, "Website Story"),
          "Website Story",
          title,
        ),
      },
      image: requireValue(
        readText(properties, "Website Image"),
        "Website Image",
        title,
      ),
      presskitUrl: readUrl(properties, "Presskit URL"),
      gameUrl: readUrl(properties, "Game link"),
      platform: readSelect(properties, "Platform") || undefined,
      status: readSelect(properties, "Development status") || undefined,
      startDate: readDate(properties, "Start Date"),
      releaseDate: readDate(properties, "Release Date"),
      order: readNumber(properties, "Website Order"),
    };
  }
}

