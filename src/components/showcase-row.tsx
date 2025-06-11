import "../styles/showcase.css";

import ShowcaseImage from "./showcase-image";
import ShowcaseDescription from "./showcase-description";
import type { Game } from "@/types/game";

interface ShowcaseRowProps {
  game: Game;
  reverse?: boolean;
}

const ShowcaseRow = ({ game, reverse }: ShowcaseRowProps) => {
  return (
    <div className="showcase-row">
      <div className="showcase-left">
        {reverse ? <ShowcaseImage game={game} reverse={reverse} /> : <ShowcaseDescription game={game} reverse={reverse} />}
      </div>
      <div className="showcase-right">
        {reverse ? <ShowcaseDescription game={game} reverse={reverse} /> : <ShowcaseImage game={game} reverse={reverse} />}
      </div>
    </div>
  );
};

export default ShowcaseRow;
