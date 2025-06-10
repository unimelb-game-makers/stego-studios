import "../styles/header.css";
import Navbar from "./Nav.tsx";

const Header = () => {
  return (
    <header>
      <div className="left">
        <img src="/images/stego.png" alt="Stego.png" />
        <h1> Stego Studios </h1>
      </div>

      <div className="right">
        <Navbar />
        <div className="logo">
          <img src="/images/discord_logo.png" alt="Discord.png" />
          <img src="/images/email_logo.png" alt="Grey-email.jpg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
