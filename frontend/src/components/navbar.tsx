import { Link, useMatch } from "@tanstack/react-router";
import "../styles/navbar.css";

const Navbar = () => {
  const isTeamActive = useMatch({ from: "/_layout/team", shouldThrow: false });
  const isGamesActive = useMatch({
    from: "/_layout/games/",
    shouldThrow: false,
  });
  const isContactActive = useMatch({
    from: "/_layout/contact",
    shouldThrow: false,
  });

  return (
    <div>
      <nav>
        <Link
          to="/team"
          className={`nav-link ${isTeamActive ? "nav-link-current" : ""}`}
        >
          Team
        </Link>
        <Link
          to="/games"
          className={`nav-link ${isGamesActive ? "nav-link-current" : ""}`}
        >
          Games
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${isContactActive ? "nav-link-current" : ""}`}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
