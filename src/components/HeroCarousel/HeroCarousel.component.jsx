import axios from "axios";
import React, {useState, useEffect} from "react";
import HeroSlider from "react-slick";







//custom arrow key
import { NextArrow, PrevArrow } from "./Arrows.component";

const HeroCarousel = () => {
  
  const [images, setImages] = useState([]);

  useEffect(()=>{
    //async

    const requestNowPlayingMovies = async() =>{
      const getImages =await axios.get("/movie/now_playing");
      setImages(getImages.data.results);
    }
    requestNowPlayingMovies();
  }, []);


  
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


  return(
    <>

      <div class= "lg:hidden">
      <HeroSlider {...settings}>  
        {images.map((image) => (
          <div className="w-full h-64 md:h-96 py-3">
            <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
      </div>

      <div className="hidden lg:block">
      <HeroSlider {...settingsLg}>  
        {images.map((image) => (
          <div className="w-2/3 h-96 px-2 py-3">
            <img src={`https://image.tmdb.org/t/p/original/${image.backdrop_path}`} alt="testing" className="w-full h-full rounded-md" />
          </div>
        ))}
      </HeroSlider>
      </div>
    </>
    );
}

export default HeroCarousel;