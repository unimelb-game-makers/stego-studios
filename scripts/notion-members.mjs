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

const readEmail = (properties, name) => {
  const property = properties[name];
  return property?.type === "email" ? property.email ?? "" : "";
};

const readUrl = (properties, name) => {
  const property = properties[name];
  return property?.type === "url" ? property.url ?? "" : "";
};

const readProperties = (page) => {
  if (!("properties" in page)) {
    throw new Error(`Unexpected Notion result type for ${page.id}.`);
  }

  return page.properties;
};

// Notion stores the team as "Rocket"; the site looks it up as "Team Rocket".
const toTeamKey = (team) => {
  if (!team) {
    return "";
  }

  return team.startsWith("Team ") ? team : `Team ${team}`;
};

export default class NotionMembers {
  constructor() {
    this.client = new Client({ auth: process.env.NOTION_TOKEN });
  }

  async getMembers() {
    const dataSourceId = process.env.NOTION_MEMBERS_DATA_SOURCE_ID;

    if (!process.env.NOTION_TOKEN || !dataSourceId) {
      return {};
    }

    const pages = [];
    let startCursor;

    do {
      const response = await this.client.dataSources.query({
        data_source_id: dataSourceId,
        start_cursor: startCursor,
      });

      pages.push(...response.results);
      startCursor = response.has_more
        ? response.next_cursor ?? undefined
        : undefined;
    } while (startCursor);

    const teams = {};

    for (const page of pages) {
      const team = NotionMembers.toTeam(page);
      teams[team] ??= [];
      teams[team].push(NotionMembers.toMember(page));
    }

    return teams;
  }

  static toTeam(page) {
    return toTeamKey(readSelect(readProperties(page), "Team"));
  }

  static toMember(page) {
    const properties = readProperties(page);
    const contact = [];

    const email = readEmail(properties, "Email");
    if (email) {
      contact.push({ type: "email", content: email });
    }

    const website = readUrl(properties, "Website") || readText(properties, "Website");
    if (website) {
      contact.push({ type: "personal", content: website });
    }

    return {
      name: readTitle(properties, "Name"),
      role: readText(properties, "Role"),
      skills: readMultiSelect(properties, "Skills (array)"),
      contact,
      description: readText(properties, "Description"),
      personalNote: readText(properties, "Personal Note"),
    };
  }
}
