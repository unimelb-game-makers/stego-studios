import { BaseCarousel } from './base-carousel'

interface Props {
  images: string[]
}

const GameCarousel = ({ images }: Props) => {
  return (
    <div className='embla__game carousel'>
      <BaseCarousel
        images={images}
        viewportClass="embla__viewport__game"
        containerClass="embla__container__game"
        slideClass="embla__slide__game"
        slideImageClass="embla__slide__img__game"
      />
    </div>
  )
}

export { GameCarousel }
