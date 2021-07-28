import axios from 'axios';
import React,{useContext,useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import {MovieContext} from '../../../../context/movie.context';


const Cast = () => {


  const {movie}  = useContext(MovieContext);
  const {id} =useParams();

  const [cast, setCast]= useState([]);

  useEffect(() => {
    const requestCast = async() =>{
      const getCast = await axios.get(`/movie/${id}/credits`);
      setCast(getCast.data.cast);
    }
    requestCast();
  }, [id]);

  console.log(cast);


    const settings={

    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],

    }


    return (
        <>
          <div className="w-full flex flex-col gap-5">
          <h1 className=" text-2xl font-bold">Cast</h1>
          <Slider {...settings}>
              {
                  cast.map((castdata)=>(
                      <div className="flex flex-col gap-2 px-4">
                          <img className="rounded-full" src={`https://image.tmdb.org/t/p/original/${castdata.profile_path}`} alt={castdata.title} />
                          <h3 className="fs3 font-bold text-center ">{castdata.original_name}</h3>
                          <p className="text-xs text-gray-600 text-center">{castdata.character}</p>
                      </div>
                  ))
              }


          </Slider>
          </div>

        </>
    )
}

export default Cast;
