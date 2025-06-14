import { useNavigate } from "@tanstack/react-router";
import "../styles/header.css";
import Navbar from "./navbar.tsx";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClicked = () => {
    navigate({ to: "/" });
  };

  return (
    <header>
      <div className="left" onClick={handleLogoClicked}>
        <img className="logo-img" src="/images/stego.png" alt="Stego.png" />
        <h1 className="title">Stego Studios</h1>
      </div>

      <div className="right">
        <Navbar />
        <div>
          <img
            className="logo-img"
            src="/images/discord_logo.png"
            alt="Discord.png"
          />
          <img
            className="logo-img"
            src="/images/email_logo.png"
            alt="Grey-email.jpg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
