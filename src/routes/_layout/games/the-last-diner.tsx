import { createFileRoute } from "@tanstack/react-router";
import { GameHeader } from "@/components/game/game-header";
import { GameFooter } from "@/components/game/game-footer";
import GameRow from "@/components/game/game-row";
import { theLastDiner } from "@/data/games";

export const Route = createFileRoute("/_layout/games/the-last-diner")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<GameHeader
				image="/images/the-last-diner.png"
				title={theLastDiner.title}
				tags={theLastDiner.tags}
				teamAnchor="team-rocket"
				presskitUrl={theLastDiner.presskitUrl}
			>
				Survival stealth game where the player is a chef gathering ingredients
				in a ruined city to cook a meal for an eldritch god. Throughout the city
				are several monsters who’ll attack the player if spotted, but need to be
				passed to gather ingredients inside of the ruined buildings. Once the
				player has the ingredients, they can return to the kitchen and cook the
				ingredients into a meal to feed the eldritch god. Once fed the god gives
				a player a powerup bonus for the remaining levels, but if not fed in
				time the player loses.
			</GameHeader>

			<GameRow game={theLastDiner} reverse={true} />
			<GameRow game={theLastDiner} />
			<GameRow game={theLastDiner} reverse={true} />

			<GameFooter />
		</>
	);
}
