import { createFileRoute } from "@tanstack/react-router";
import { GameHeader } from "@/components/game/game-header";
import { GameFooter } from "@/components/game/game-footer";
import GameRow from "@/components/game/game-row";
import { noellesArk } from "@/data/games";

export const Route = createFileRoute("/_layout/games/noelles-ark")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<GameHeader
				image="/images/banners/noelles_ark.png"
				title={noellesArk.title}
				tags={noellesArk.tags}
				teamAnchor="team-aqua"
				presskitUrl={noellesArk.presskitUrl}
			>
				Following a coming of age ceremony that went worse than you could have imagined, 
				Noelle is left transformed into a monstrous creature and forced to flee from home.
				<br /><br />
				She arrives on an unfamiliar island beyond what she had known existed and prepares 
				for all she can do; survive.
				<br /><br />
				To make matters worse, a disastrous world-resetting flood is imminent, approaching 
				in less than 10 days.
				<br /><br />
				How can Noelle save herself, her new allies and learn the truth hidden beneath the waters? 
				And how can an old tale, one closely resembling your own journey, guide you through the storm?
			</GameHeader>

			<GameRow game={noellesArk} reverse={true} />
			<GameRow game={noellesArk} />
			<GameRow game={noellesArk} reverse={true} />

			<GameFooter />
		</>
	);
}
