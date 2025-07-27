import { BaseCarousel } from './base-carousel'

const MainCarousel = () => {
  return (
    <div className='embla carousel'>
      <BaseCarousel
        images={[
          "/images/image_one.jpg",
          "/images/image_two.jpg",
          "/images/image_three.jpg",
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
