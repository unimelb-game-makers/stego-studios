import { type Game } from "@/types/game";

interface GameMediaProps {
  game: Game;
  reverse?: boolean;
}

const GameMedia = ({ game, reverse }: GameMediaProps) => {
  return (
    <div>
      <img
        className="showcase-background-image"
        src="/images/Top_Square.png"
        alt="Top_square.png"
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
      </div>
    </div>
  );
};

export { GameMedia }
