import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import '../styles/header.css'; 


const Navbar = () => {
    const mystyle = {
        color: "white",
        padding: "30px", 
        fontFamily: "Arial",
        textDecoration: "none",
        textTransform: "none",
    };
    
    

    return (
        <div className="open">
        <nav>
            <NavLink to="/home" style={mystyle}>Home</NavLink>
            <NavLink to="/team" style={mystyle}>Team</NavLink>
            <NavLink to="/games" style={mystyle}>Games</NavLink>
            <NavLink to="/contact" style={mystyle}>Contact</NavLink>

        </nav>
        </div>
       
    )
   

}

export default Navbar
