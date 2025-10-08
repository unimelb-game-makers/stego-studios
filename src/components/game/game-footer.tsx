import { Link } from "@tanstack/react-router";
import "../../styles/game.css";

export const GameFooter = () => {
  return (
    <div className="game-footer">
      <p className="game-footer-text">
        Curious who cooks up this madness? Step into the shadows and meet the
        team.
      </p>
      <Link to="/team" className="game-button game-footer-button">
        Meet the Team
      </Link>
    </div>
  );
};
