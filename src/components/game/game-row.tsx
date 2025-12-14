import "../../styles/showcase.css";

import type { Game } from "@/types/game";
import { GameMedia } from "./game-media";
import { GameGif } from "./games-gif";

type Section = "features" | "description" | "story"

interface GameRowProps {
	game: Game;
	section: Section;
	reverse?: boolean;
}

const GameRow = ({ game, section, reverse = false }: GameRowProps) => {
	let gifData;

	if (section === "features") {
		gifData = game.gifFeature;
	} else if (section === "description") {
		gifData = game.gifDescription;
	} else {
		gifData = game.gifStory;
	}

	const media = <GameMedia  game={game} reverse={reverse} />;
	const gif = (
		<GameGif
			title={gifData.title}
			description={gifData.description}
			reverse={reverse}
		/>
	);

	return (
		<div className={`${reverse ? "showcase-row-reverse" : "showcase-row"}`}>
			<div className="showcase-left">
				{reverse ? media : gif}
			</div>
			<div className="showcase-right">
				{reverse ? gif : media}
			</div>
		</div>
	);
};

export default GameRow;
