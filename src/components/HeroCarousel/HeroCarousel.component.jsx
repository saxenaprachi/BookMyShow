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


const images = ["https://images.unsplash.com/photo-1626183180592-5fb63f4dc501?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1626086317969-12bfc331c17d?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1626398836468-c9054b979ad0?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
"https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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