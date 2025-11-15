import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import "../../styles/game.css";

interface GameHeaderProps {
  image: string;
  title: string;
  tags: string[];
  children: ReactNode;
  teamAnchor: string;
  presskitUrl?: string;
}

const GameHeader = ({ image, title, tags, children, teamAnchor, presskitUrl }: GameHeaderProps) => {
  return (
    <div className="game-header">
      <img src={image} className="game-header-image" />
      <div className="game-header-content">
        <h4 className="game-subheader">ABOUT THE GAME</h4>
        <h1 className="game-title">{title}</h1>
        <p className="game-tags">
          {tags.map((tag, index) => (
            <span key={index}>
              {tag.toUpperCase()}
              {index < tags.length - 1 && " | "}
            </span>
          ))}
        </p>
        <p className="game-description">{children}</p>
        <div className="game-button-holder">
          <Link
            to="/team"
            hash={teamAnchor}
            className="game-button"
          >
            The Team
          </Link>
          
          <Link
            to="." 
            className="game-button"
          >
            Presskit
          </Link>

          <button
            className="game-button"
            onClick={() => {
              if (presskitUrl) {
                const link = document.createElement("a");
                link.href = presskitUrl;
                link.download = "";
                link.click();
              }
            }}
          >
            Presskit
          </button>
        </div>
      </div>
    </div>
  )
}

export { GameHeader }
