import React from 'react'
import '../styles/scrolling.css'; 
import Marquee from 'react-fast-marquee';


const ScrollingBanner = () => {

    return (
        <Marquee className="marquee">
            <div className="announcement">
            <div className="announcement-text text1">
                <span>Games this Season</span>
            </div>
            <div className="announcement-text text2">
                <span>Games this Season</span>

            </div>
        </div>
        </Marquee>
       
    )

}

export default ScrollingBanner
