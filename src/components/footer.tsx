import { Link } from "@tanstack/react-router";
import "../styles/footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container footer-left">
        <img className="logo-img" src="/images/stego.png" alt="Stego.png" />
        <h1>Stego Studios</h1>
      </div>
      <div className="footer-container">
        <div className="footer-link-container">
          <Link to="/">Home</Link>
          <Link to="/team">Team</Link>
          <Link to="/games">Games</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-container footer-right">
        <p className="copyright-statement">&copy; 2025 Stego Studios. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
