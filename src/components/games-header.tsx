import "../styles/games.css";

const GamesHeader = ({ year }: { year: number }) => {
  return (
    <div className="games-header">
      <h1>Games in {year}</h1>
    </div>
  );
};

export default GamesHeader;
