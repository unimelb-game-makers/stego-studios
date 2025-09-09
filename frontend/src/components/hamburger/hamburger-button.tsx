
interface HamburgerButtonProps {
    isMenuOpen: boolean;
    onClick: () => void;
}


function HamburgerButton( { isMenuOpen, onClick }: HamburgerButtonProps) {
    return (
        <button
            className="hamburger"
            onClick={onClick}
        >
            {isMenuOpen ? "✖" : "☰"}
        </button>
    )
}


export { HamburgerButton };
