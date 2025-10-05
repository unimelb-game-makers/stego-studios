import { useNavigate } from "@tanstack/react-router";
import "../styles/header.css";
import Navbar from "./navbar.tsx";
import { useState, useRef, useEffect } from "react";
import { HamburgerButton } from "./hamburger/hamburger-button.tsx";
import { HamburgerMenu } from "./hamburger/hamburger-sidemenu.tsx";
import { motion, useScroll } from "framer-motion";

const SCROLL_THRESHOLD = 300;
const SCROLL_DISTANCE_THRESHOLD = 150;

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

  // For handling dynamic header
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const previous = lastY.current;
      const diff = latest - previous;

      if (latest > SCROLL_THRESHOLD && diff > SCROLL_DISTANCE_THRESHOLD) {
        setHidden(true);
        lastY.current = latest;
      }
      else if (diff < -SCROLL_DISTANCE_THRESHOLD) {
        setHidden(false);
        lastY.current = latest;
      }
    });
  }, [scrollY]);

  
  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
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

    </motion.header>
  );
};

export default Header;
