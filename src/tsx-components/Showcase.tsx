import React from "react";
import '../styles/showcase.css'  // This is the issue


const Showcase = () => {
    return (
        <div>
        <div className="top">       
            <div className="topBar">
            <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
            <img src="/images/creepycook.png" alt="creepycook.png"/>
            </div>
            <div className="topSquare">
            <img src="/images/Top_Square.png" alt="Top_square.png"/>
            </div>

            <div className="creepycook">
                <h1>Creepy Cook!</h1>
                <p>Cooking | Horror | Roguelike</p>
                <p>Team Rocket </p>
                <p>In this survival stealth game, players must scavenge a ruined city</p>
                <p>for ingredients to cook an offering.  They must avoid monsters</p>
                <p>while collecting ingredients.</p>

                <div className="creepyButtons">
                    <button>Learn More</button>
                    <button>Wishlist on Steam</button>
                </div>
                

            </div>
        </div>

        <div className="middle">
            <div className="middleBar">
            <img src="/images/Middle_Bar.png" alt="Middle_Bar.png"/>
            <img src="/images/trackline.png" alt="trackline.png"/>

            </div>
            <div className="middleSquare">
            <img src="/images/Middle_Square.png" alt="Middle_square.png"/>
            </div>
        </div>

        <div className="bottom">
            <div className="bottomBar">
            <img src="/images/Bottom_Bar.png" alt="Bottom_Bar.png"/>
            <img src="/images/creatureark.png" alt="creatureark.png"/>
            </div>
            <div className="bottomSquare">
            <img src="/images/Bottom_Square.png" alt="Bottom_Square.png"/>
            </div>
        </div>
        </div>
        
        


        

    )
}

export default Showcase
