# Notion snapshots

Some site content lives in Notion instead of in the code. The site never calls
Notion at runtime. A build script reads the database, writes a JSON file into
`src/data/`, and the React code imports that file. The `NOTION_TOKEN` only runs
inside the build script and never reaches the browser bundle.

Use this for content that non developers edit and that does not need to update
the instant it changes.

## What uses it

- **Games** — `scripts/notion-games.mjs` and `scripts/sync-games.mjs` write
  `src/data/games.generated.json`, loaded by `src/data/games.ts`. The sync
  runs automatically before `dev`, `start`, and `build`.
- **Devlog** — `scripts/devlog.tsx` writes `src/data/devlog.json`. Run by hand
  with `bun scripts/devlog.tsx`.

- Team members are TODO

## Updating content

Edit the Notion database, then trigger a deploy. The production build re-syncs
from Notion, so the change ships with it. The daily rebuild workflow also
picks it up within a day.

Nothing to change in the code. The `.generated.json` files are committed only
as a fallback for offline builds and for local dev without a token. Refresh
them with `bun run sync:games` if you want the committed copy current, but the
live site does not depend on it.

## Deploys

`build` runs the sync first, so the deploy environment needs `NOTION_TOKEN`
and each `NOTION_*_DATA_SOURCE_ID`. To build against the committed snapshot
instead, for example when Notion is down:

```sh
NOTION_SKIP_SYNC=1 bun run build
```

## Notion integration

Create an internal integration in the workspace settings, share each snapshot
database with it as read only, and use its secret as `NOTION_TOKEN`. A data
source id is not a secret and can sit in `.env.example`.
