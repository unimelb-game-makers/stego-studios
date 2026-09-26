# Setup

```sh
bun install
bun run sync:games
bun run dev
```

## Notion game data

The public game data is synced from the **Past Game Database** before local
development and production builds. The Notion token is only used by the build
script and is never bundled into the browser application. The
`NotionGames.toGame()` transformer converts Notion property objects into the
existing `Game` shape consumed by React.

1. Create a Notion internal integration and give it read access to the Past
   Game Database.
2. Copy `.env.example` to `.env`.
3. Set `NOTION_TOKEN` to the integration secret. The data source ID is already
   included in `.env.example`.
4. Run `bun run sync:games` whenever you want to refresh
   `src/data/games.generated.json` without starting the app.

Only rows with **Featured on Website** checked are published. A featured row
must provide **Game title**, **Genre**, **Team**, **Description**, **Website
Image**, **Website Features**, **Website About**, and **Website Story**. Website
ordering comes from **Website Order**.

For an offline build using the last committed snapshot, run:

```sh
NOTION_SKIP_SYNC=1 bun run build
```
