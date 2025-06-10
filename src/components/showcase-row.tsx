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
        {reverse ? <ShowcaseImage game={game} /> : <ShowcaseDescription game={game} />}
      </div>
      <div className="showcase-right">
        {reverse ? <ShowcaseDescription game={game} /> : <ShowcaseImage game={game} />}
      </div>
    </div>
  );
};

export default ShowcaseRow;
