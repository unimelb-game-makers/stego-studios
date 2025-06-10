import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { usePrevNextButtons } from "./carousel-buttons.tsx";

import "../styles/embla.css";
import "../styles/carousel.css";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const OPTIONS = { loop: true, duration: 30 };

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  const imageUrls: string[] = [
    "/images/image_one.jpg",
    "/images/image_two.jpg",
    "/images/image_three.jpg",
  ];
  return (
    <div className="embla carousel">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {imageUrls.map((src, index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={src}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>

        <ArrowBackIos className="arrow-back" onClick={onPrevButtonClick} />
        <ArrowForwardIos
          className="arrow-forward"
          onClick={onNextButtonClick}
        />
      </div>
    </div>
  );
};

export default Carousel;
