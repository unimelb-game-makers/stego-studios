import React from "react";
import Carousel from "../tsx-components/Carousel.tsx";
import ScrollingBanner from "../tsx-components/ScrollingBanner.tsx";
import Showcase from "../tsx-components/Showcase.tsx";

const Home = () => {
  return (
    <>
      <Carousel />
      <ScrollingBanner />
      <Showcase />
    </>
  );
};

export default Home;
