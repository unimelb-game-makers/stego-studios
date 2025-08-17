import type { ReactNode } from "react";
import "../../styles/game.css";

interface GameHeaderProps {
  image: string;
  title: string;
  tags: string[];
  children: ReactNode;
}

const GameHeader = ({ image, title, tags, children }: GameHeaderProps) => {
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
          <button className="game-button">The Team</button>
          <button className="game-button">Presskit</button>
        </div>
      </div>
    </div>
  )
}

export { GameHeader }
