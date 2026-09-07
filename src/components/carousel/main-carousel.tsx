import { BaseCarousel } from './base-carousel'

const MainCarousel = () => {
  return (
    <div className='embla carousel'>
      <BaseCarousel
        images={[
          "/images/the-last-diner.png",
          "/images/banners/trackline.png",
          "/images/banners/noelles_ark.png",
        ]}
        viewportClass="embla__viewport"
        containerClass="embla__container"
        slideClass="embla__slide"
        slideImageClass="embla__slide_img"
      />
    </div>
  )
}

export { MainCarousel }
