import type { Game } from "@/types/game";

export interface ShowcaseRowProps {
  game: Game;
}

const ShowcaseDescription = ({ game }: ShowcaseRowProps) => {
  return (
    <div>
      <img
        className="showcase-background-image"
        src="/images/Top_Square.png"
        alt="Top_square.png"
      />
      <div className="overlay-div showcase-description">
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
      </div>
    </div>
  );
};

export default ShowcaseDescription;
