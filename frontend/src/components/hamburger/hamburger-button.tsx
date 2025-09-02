import React from "react";

interface HamburgerButtonProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


function HamburgerButton( { isMenuOpen, setIsMenuOpen }: HamburgerButtonProps) {
    return (
        <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            {isMenuOpen ? "✖" : "☰"}
        </button>
    )
}


export default HamburgerButton;
