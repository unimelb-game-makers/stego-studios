import { Link } from "@tanstack/react-router";

import type { FileRouteTypes } from "../../routeTree.gen";


interface HamburgerMenuProps {
    isMenuOpen: boolean;
    onClick: () => void;
}

const HamburgerMenu = ({ isMenuOpen, onClick }: HamburgerMenuProps) => {
    
    type Route = FileRouteTypes["to"];
    
    const tabs: Record<string, Route> = {
        Home: '/',
        Games: '/games',
        Team: '/team',
        Contact:  '/contact',
    }
    
    return (
        <>
            {isMenuOpen && (<div className="hamburger-overlay"></div>)}
            
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
                        onClick={onClick}
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
                {Object.entries(tabs).map(([label, path]) => {
                    return(
                        <Link
                            key={label}
                            to={path}
                            onClick={onClick}
                            style={{
                            color: "#fff",
                            fontSize: "clamp(16px, 4vw, 100px)",
                            textDecoration: "none",
                            textAlign: "center",
                            }}
                        >
                            {label}
                        </Link>
                    )
                })}
                </div>
            </div>
        </>
    )

}

export { HamburgerMenu };