import React,{useState, useEffect} from 'react';
import Slider from '../../../PosterSlider/PosterSlider.component';
import { useParams } from 'react-router';
import axios from 'axios';

const Youmaylike = () => {

  const {id}= useParams();

  const [similar, setSimilar]= useState([]);

  useEffect(() => {

    const requestSimilar = async() =>{
      const getSimilar = await axios.get(`/movie/${id}/similar`);
      setSimilar(getSimilar.data.results);
    }
    requestSimilar();
   
  }, [id])

    const settings={
        autoplay: false,
        slidesToShow: 4,
              slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
    
        };
    return (
        <>
           <div className="container my-40 lg:my-5">
           <Slider config={settings} images={similar} title="You might also like" subtitle="" isDark={false}/>
           </div>

        </>
    )
}

export default Youmaylike;