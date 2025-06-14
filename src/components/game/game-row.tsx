import "../../styles/showcase.css";

import { GameMedia } from "./game-media";
import { GameMediaDescription } from "./game-media-description";
import { type Game } from "@/types/game";

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
          <GameMediaDescription game={game} reverse={reverse} />
        )}
      </div>
      <div className="showcase-right">
        {reverse ? (
          <GameMediaDescription game={game} reverse={reverse} />
        ) : (
          <GameMedia game={game} reverse={reverse} />
        )}
      </div>
    </div>
  );
};

export default GameRow;
