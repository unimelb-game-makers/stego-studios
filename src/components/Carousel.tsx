import React, { useState } from "react";
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

    if (currImg == -1) {
        setCurrImg(2)
    }

    if (currImg == 3) {
        setCurrImg(0)
    }

    const handleClick = () => {
        
    }

    return (
        <div className="carousel">
            <ArrowBackIos className="arrow-back" onClick = {() => {setCurrImg(currImg - 1)}}/>
            <ArrowForwardIos className="arrow-forward" onClick = {() => {setCurrImg(currImg + 1)}}/>
            <img src={imageUrls[currImg]} alt="Image description"/>
        </div>
)  
}

export default Carousel
