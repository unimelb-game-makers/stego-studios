import { Link } from "@tanstack/react-router";
import HamburgerOverlay from "./hamburger-overlay";


interface HamburgerMenuProps {
    isMenuOpen: boolean;
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const HamburgerMenu = ({ isMenuOpen, setIsMenuOpen }: HamburgerMenuProps) => {
    const tabs = ["Home", "About", "Games", "Team", "Contact"];
    return (
        <>
            {isMenuOpen && (<HamburgerOverlay></HamburgerOverlay>)}
            
            <div
                style={{
                position: "fixed",
                top: 0,
                right: 0,
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100,
                transform: isMenuOpen ? "translateX(0%)" : "translateX(100%)",
                transition: "transform 0.3s ease",
                }}
            >   
                <div
                    style={{
                        position: "fixed",
                        top: 18,
                        right: 21,
                    }}
                    >
                    <button 
                        className="overlay-cross-button"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        ✖
                    </button>
                </div>

                <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "32px", 
                }}
                >
                {tabs.map((tab) => {
                    const path = tab === "Home" ? "/" : `/${tab.toLowerCase()}`;
                    return (
                    <Link
                        key={tab}
                        to={path}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                        color: "#fff",
                        fontSize: "clamp(16px, 4vw, 100px)",
                        textDecoration: "none",
                        textAlign: "center",
                        }}
                    >
                        {tab}
                    </Link>
                    )
                })}
                </div>
            </div>
        </>
    )

}

export default HamburgerMenu;