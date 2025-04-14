import React from "react";
import '../styles/showcase.css'  // This is the issue
import ShowcaseItem from "./ShowcaseItem.tsx";


const Showcase = () => {
    return (
      <div className="showcase">
        <div className="showcase-row">
            <div className="showcase-left">
              <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
              {/* <img src="/images/creepycook.png" alt="creepycook.png"/> */}
            </div>
            <div className="showcase-right">
              <img src="/images/Top_Square.png" alt="Top_square.png"/>
            </div>
        </div>

        <div className="showcase-row">
            <div className="showcase-left">
              <img src="/images/Top_Square.png" alt="Top_square.png"/>
              {/* <img src="/images/creepycook.png" alt="creepycook.png"/> */}
            </div>
            <div className="showcase-right">
              <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
            </div>
        </div>


        <div className="showcase-row">
            <div className="showcase-left">
              <img src="/images/Top_Bar.png" alt="Top_Bar.png"/>
              {/* <img src="/images/creepycook.png" alt="creepycook.png"/> */}
            </div>
            <div className="showcase-right">
              <img src="/images/Top_Square.png" alt="Top_square.png"/>
            </div>
        </div>
      </div>
    )
}

export default Showcase
