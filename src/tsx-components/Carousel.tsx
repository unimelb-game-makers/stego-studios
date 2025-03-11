import React, { useState, use } from "react";
import '../styles/carousel.css'; 

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
  

const Carousel = () => {
    const imageUrls: string[] = [
        '/images/image_one.jpg',
        '/images/image_two.jpg',
        '/images/image_three.jpg'
    ];
    const [currImg, setCurrImg] = useState(0) 
    

    


    const handleBackClick = () => {
        setCurrImg((prevImg) => (prevImg - 1 + 3) % 3)
    }

    const handleForwardClick = () => {
        setCurrImg((prevImg) => (prevImg + 1 + 3) % 3)
    }

   
  
    return (
        <div className="carousel">
            <ArrowBackIos className="arrow-back" onClick = {handleBackClick}/>

            {/* <ArrowBackIos className="arrow-back" onClick = {() => {setCurrImg(currImg - 1)}}/> */}
            <ArrowForwardIos className="arrow-forward" onClick = {handleForwardClick}/>
            <img src={imageUrls[currImg]} alt="Image description"/>
        </div>
)  
}

export default Carousel
