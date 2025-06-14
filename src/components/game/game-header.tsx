import "../../styles/game.css";

interface GameHeaderProps {
  image: string;
  title: string;
  tags: string[];
  description: string;
}

const GameHeader = ({ image, title, tags, description }: GameHeaderProps) => {
  return (
    <div className="game-header">
      <img src={image} className="game-header-image" />
      <div className="game-header-content">
        <h2>ABOUT THE GAME</h2>
        <h1>{title}</h1>
        <h4>
          {tags.map((tag, index) => (
            <span key={index}>
              {tag}
              {index < tags.length - 1 && " | "}
            </span>
          ))}
        </h4>
        <p>{description}</p>
      </div>
    </div>
  )
}

export { GameHeader }
