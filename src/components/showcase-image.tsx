import type { Game } from "@/types/game";
import { Link } from "@tanstack/react-router";

export interface ShowcaseImageProps {
  game: Game;
}

const ShowcaseImage = ({ game }: ShowcaseImageProps) => {
  return (
    <div>
      <img
        className="showcase-background-image"
        src="/images/Top_Bar.png"
        alt="Top_Bar.png"
      />
      <div className="showcase-overlay">
        <Link {...game.linkProps}>
          <img
            className="showcase-game-image"
            src={game.image}
            alt={game.image}
          />
        </Link>
      </div>{" "}
    </div>
  );
};

export default ShowcaseImage;
