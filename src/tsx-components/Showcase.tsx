import React from "react";
import '../styles/showcase.css'  // This is the issue


const Showcase = () => {
    return (
        <div>
        <div className="top">       
            <div className="topBar">
            <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
            </div>
            <div className="topSquare">
            <img src="/images/Top_Square.png" alt="Top_square.png"/>
            </div>
        </div>

        <div className="middle">
            <div className="middleBar">
            <img src="/images/Middle_Bar.png" alt="Middle_Bar.png"/>
            </div>
            <div className="middleSquare">
            <img src="/images/Middle_Square.png" alt="Middle_square.png"/>
            </div>
        </div>

        <div className="bottom">
            <div className="bottomBar">

            </div>
            <div className>

            </div>
        </div>


        </div>
        
        


        

    )
}

export default Showcase
