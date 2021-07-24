import React from "react";
import HeroSlider from "react-slick";




//custom arrow key
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {

  const settingsLg={
    arrows: true,
    centerMode: true,
    centerPadding: "450px",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };


const images = ["https://in.bmscdn.com/promotions/cms/creatives/1626372139417_bsm_1280x500_chickflick_2.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1625135512787_bas_1280x500.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1626791718659_pizzaalovestory_1280x500webbannerios.jpg",
"https://in.bmscdn.com/promotions/cms/creatives/1626939535622_resistance_1280x500webbannerios.jpg",
];

  return(
    <>

      <div class= "lg:hidden">
      <HeroSlider {...settings}>  
        {images.map((image) => (
          <div className="w-full h-64 md:h-96 py-3">
            <img src={image} alt="testing" className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
      </div>

      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>  
        {images.map((image) => (
          <div className="w-2/3 h-96 px-2 py-3">
            <img src={image} alt="testing" className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
      </div>
    </>
    );
}

export default HeroCarousel;