import { useNavigate } from "@tanstack/react-router";
import "../styles/header.css";
import Navbar from "./navbar.tsx";
import { useState } from "react";
import { HamburgerButton } from "./hamburger/hamburger-button.tsx";
import { HamburgerMenu } from "./hamburger/hamburger-sidemenu.tsx";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClicked = () => {
    navigate({ to: "/" });
  };

  // For handling the menu opened/closed by the hamburger button
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleHamburgerClicked = () => {
    setIsMenuOpen((prev) => (!prev));
  }


  
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

      {/* Mobile Hamburger */}
      <HamburgerButton 
        isMenuOpen={isMenuOpen}
        onClick={handleHamburgerClicked}  
      ></HamburgerButton>

      {/* Slide-in side menu */}
      <HamburgerMenu
        isMenuOpen={isMenuOpen}
        onClick={handleHamburgerClicked} 
      ></HamburgerMenu>

    </header>
  );
};

export default Header;
