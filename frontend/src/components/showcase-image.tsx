import { type Game } from "@/types/game";
import { Link } from "@tanstack/react-router";

export interface ShowcaseImageProps {
  game: Game;
  reverse?: boolean;
}

const ShowcaseImage = ({ game, reverse }: ShowcaseImageProps) => {
  return (
    <div>
      <img
        className="showcase-background-image"
        src="/images/Top_Bar.png"
        alt="Top_Bar.png"
      />
      <div className="showcase-overlay-image">
        <div
          className={`${reverse ? "showcase-game-image-right" : "showcase-game-image-left"}`}
        >
          <Link {...game.linkProps}>
            <img
              className="showcase-game-image green-border"
              src={game.image}
              alt={game.image}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseImage;
