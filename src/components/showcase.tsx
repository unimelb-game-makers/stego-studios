import { type Game } from "@/types/game";
import "../styles/showcase.css";

import ShowcaseRow from "./showcase-row";

const Showcase = ({ games }: { games: Game[] }) => {
  return (
    <div className="showcase">
      {games.map((game, i) => (
        <ShowcaseRow key={game.title} game={game} reverse={i % 2 === 0} />
      ))}
    </div>
  );
};

export default Showcase;
