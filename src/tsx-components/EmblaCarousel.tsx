import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Fade from 'embla-carousel-fade'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.tsx'

import '../styles/embla.css';
import '../styles/carousel.css';

import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

const EmblaCarousel = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Fade()])

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi, null)

  return (
    <div className="embla carousel">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <img
                className="embla__slide__img"
                src={`https://picsum.photos/600/350?v=${index}`}
                alt="Your alt text"
              />
            </div>
          ))}
        </div>

        <ArrowBackIos className="arrow-back" onClick = {onPrevButtonClick}/>
        <ArrowForwardIos className="arrow-forward" onClick={onNextButtonClick}/>
      </div>
    </div>
  )
}

export default EmblaCarousel
