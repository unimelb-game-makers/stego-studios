import type { Game } from "@/types/game";

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
          <img
            className="showcase-game-image"
            src={game.image}
            alt={game.image}
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default ShowcaseImage;
