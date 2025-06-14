import { type Game } from "@/types/game";
import { Link } from "@tanstack/react-router";

interface GameMediaDescriptionProps {
  game: Game;
  reverse?: boolean;
}

const GameMediaDescription = ({ game, reverse }: GameMediaDescriptionProps) => {
  return (
    <div>
      <img
        className="showcase-background-image"
        src="/images/Top_Square.png"
        alt="Top_square.png"
      />
      <div className="showcase-overlay-description">
        <div
          className={`${reverse ? "showcase-description-left" : "showcase-description-right"}`}
        >
          <div className="showcase-description">
            <h1>{game.title}</h1>
            <p>
              {game.tags.map((tag, index) => (
                <span key={index}>
                  {tag}
                  {index < game.tags.length - 1 && " | "}
                </span>
              ))}
            </p>
            <p>{game.team}</p>
            <p>{game.description}</p>
            <div
              className={`showcase-button-holder${reverse ? "-reverse" : ""}`}
            >
              <Link {...game.linkProps} className="showcase-button">Learn More &#x2197;</Link>
              <Link {...game.linkProps} className="showcase-button">Wishlist on Steam &#x2197;</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GameMediaDescription }
