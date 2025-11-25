import { createFileRoute } from "@tanstack/react-router";
import { GameHeader } from "@/components/game/game-header";
import { GameFooter } from "@/components/game/game-footer";
import GameRow from "@/components/game/game-row";
import { trackline } from "@/data/games";
export const Route = createFileRoute("/_layout/games/trackline")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<>
			<GameHeader
				image="/images/banners/trackline.png"
				title={trackline.title}
				tags={trackline.tags}
				teamAnchor="team-magma"
				presskitUrl={trackline.presskitUrl}
			>
				Set in the atmospheric subterranean infrastructure in the reaches below the city where music is power, 
				the undercity pulses with corrupted, hypnotic beats that enslave the populace. The player takes on the 
				role of a lone explorer from the upper society who wields a cassette player that can manipulate the 
				rhythmic patterns of the world. By swapping “Resonance Tapes”, the players alter the rhythm of the 
				environment and control enemies' movements to sync with the music, as each tape affects the game's tempo, 
				allowing the player to adapt to different challenges. Players must gain mastery over syncing to dynamic, 
				rhythm-driven combat and platforming to beat their way through the underground.
			</GameHeader>

			<GameRow game={trackline} section="features" reverse={true} />
			<GameRow game={trackline} section="description" />
			<GameRow game={trackline} section="story" reverse={true} />

			<GameFooter />
		</>
	);
}
