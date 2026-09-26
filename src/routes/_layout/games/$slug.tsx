import { GameFooter } from "@/components/game/game-footer";
import { GameHeader } from "@/components/game/game-header";
import GameRow from "@/components/game/game-row";
import { getGameBySlug } from "@/data/games";
import { createFileRoute, notFound } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/games/$slug")({
  loader: ({ params }) => {
    const game = getGameBySlug(params.slug);

    if (!game) {
      throw notFound();
    }

    return game;
  },
  component: RouteComponent,
});

function RouteComponent() {
  const game = Route.useLoaderData();
  const teamAnchor = game.team
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return (
    <>
      <GameHeader
        image={game.image}
        title={game.title}
        tags={game.tags}
        teamAnchor={teamAnchor}
        presskitUrl={game.presskitUrl}
      >
        {game.gameDescription}
      </GameHeader>

      <GameRow game={game} section="features" reverse={true} />
      <GameRow game={game} section="description" />
      <GameRow game={game} section="story" reverse={true} />

      <GameFooter />
    </>
  );
}
