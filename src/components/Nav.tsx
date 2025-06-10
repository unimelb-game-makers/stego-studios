import { Link } from "@tanstack/react-router";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/team" className="nav-link">
          Team
        </Link>
        <Link to="/games" className="nav-link">
          Games
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
