import React from "react";
import '../styles/header.css'; 
import Navbar from './Nav.tsx';

import { BrowserRouter } from "react-router-dom";



const Header = () => {
    return (
        
        <header>
            <div class="left">
            <img src="/images/stego.png" alt="Stego.png"/>
            <h1> Stego Studios </h1>
            </div>

            <div class="right">
            {/* <BrowserRouter>
            <Navbar />
            </BrowserRouter> */}
            <Navbar />
            <div class="logo">
            <img src="/images/discord_logo.png" alt="Discord.png"/>
            <img src="/images/email_logo.png" alt="Grey-email.jpg"/>
            </div>
            </div>
        
        </header>


    )
}

export default Header
