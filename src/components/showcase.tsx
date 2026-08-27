import { games } from "@/data/games";
import "../styles/showcase.css";

import ShowcaseRow from "./showcase-row";

const Showcase = () => {
  return (
    <div className="showcase">
      {games.map((game, index) => (
        <ShowcaseRow
          key={game.id}
          game={game}
          reverse={index % 2 === 0}
        />
      ))}
    </div>
  );
};

export default Showcase;
