import Slider from "react-slick";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

import "../../../styles/slider.css";

export const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swibeToSlide: true,
  };

  return (
    <Slider {...settings}>
      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum error quidem iusto eius magni perferendis, saepe culpa rem at
          sequi autem veniam, nihil quis tempora, qui asperiores incidunt
          blanditiis?
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava01} alt='avatar' />
          <h6 className='person__name'>Mohamed Ahmad</h6>
        </div>
      </div>

      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum error quidem iusto eius magni perferendis, saepe culpa rem at
          sequi autem veniam, nihil quis tempora, qui asperiores incidunt
          blanditiis?
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava02} alt='avatar' />
          <h6 className='person__name'>Ola Elshamy</h6>
        </div>
      </div>

      <div>
        <p className='review__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          dolorum error quidem iusto eius magni perferendis, saepe culpa rem at
          sequi autem veniam, nihil quis tempora, qui asperiores incidunt
          blanditiis?
        </p>
        <div className='slider__content d-flex align-items-center gap-3'>
          <img src={ava03} alt='avatar' />
          <h6 className='person__name'>Osama Elaraby</h6>
        </div>
      </div>
    </Slider>
  );
};
