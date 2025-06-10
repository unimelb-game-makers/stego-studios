import type { Game } from "@/types/game";
import { Link } from "@tanstack/react-router";

export interface ShowcaseImageProps {
  game: Game;
}

const ShowcaseImage = ({ game }: ShowcaseImageProps) => {
  return (
    <div>
      <img src="/images/Top_Bar.png" alt="Top_Bar.png" />
      <div className="overlay-div">
        <Link {...game.linkProps}>
          <img src={game.image} alt={game.image} />
        </Link>
      </div>{" "}
    </div>
  );
};

export default ShowcaseImage;
