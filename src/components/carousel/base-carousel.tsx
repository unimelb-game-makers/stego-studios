import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import { usePrevNextButtons } from "./carousel-buttons.tsx";

import "../../styles/embla.css";
import "../../styles/carousel.css";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const OPTIONS = { loop: true, duration: 30 };

interface Props {
  images: string[],
  viewportClass: string,
  containerClass: string,
  slideClass: string,
  slideImageClass: string,
}

const BaseCarousel = ({ images, viewportClass, containerClass, slideClass, slideImageClass }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Fade()]);
  const { onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
  return (
    <div className={viewportClass} ref={emblaRef}>
      <div className={containerClass}>
        {images.map((src, index) => (
          <div className={slideClass} key={index}>
            <img
              className={slideImageClass}
              src={src}
              alt="Carousel Slide"
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
  );
};

export { BaseCarousel }
