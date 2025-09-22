import "../../styles/showcase.css";

import type { Game } from "@/types/game";
import { GameMedia } from "./game-media";
import { GameGif } from "./games-gif";

interface GameRowProps {
	game: Game;
	reverse?: boolean;
}

const GameRow = ({ game, reverse }: GameRowProps) => {
	return (
		<div className={`${reverse ? "showcase-row-reverse" : "showcase-row"}`}>
			<div className="showcase-left">
				{reverse ? (
					<GameMedia game={game} reverse={reverse} />
				) : (
					// <GameMediaDescription game={game} reverse={reverse} />
					<GameGif
						title="Story"
						description={"description\nyes\nanother feature"}
						reverse
					></GameGif>
				)}
			</div>
			<div className="showcase-right">
				{reverse ? (
					// <GameMediaDescription game={game} reverse={reverse} />
					<GameGif
						title="Features"
						description={"description\nyes\nanother feature"}
						reverse
					></GameGif>
				) : (
					<GameMedia game={game} reverse={reverse} />
				)}
			</div>
		</div>
	);
};

export default GameRow;
