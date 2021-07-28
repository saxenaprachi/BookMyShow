import React, {useState, useEffect} from "react";
import EntertainmentSlider from "../components/Entertainment/EntertainmentCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";

import axios from "axios";



const Home =(props)=>{

  const [popularMovies, SetPopularMovies]= useState([]);
  const [topRatedMovies, SetTopRatedMovies]= useState([]);
  const [upcomingMovies, SetUpcomingMovies]= useState([]);

  useEffect(()=>{
    const requestPopularMovies = async() =>{
      const getPopularMovies = await axios.get("/movie/popular");
      SetPopularMovies(getPopularMovies.data.results);
      
    }
    requestPopularMovies();
  } 
  ,[]);

  useEffect(()=>{
    const requestTopRatedMovies = async() =>{
      const getTopRatedMovies = await axios.get("/movie/top_rated");
      SetTopRatedMovies(getTopRatedMovies.data.results);
      
    }
    requestTopRatedMovies();
  } 
  ,[]);

  useEffect(()=>{
    const requestUpcomingMovies = async() =>{
      const getUpcomingMovies = await axios.get("/movie/upcoming");
      SetUpcomingMovies(getUpcomingMovies.data.results);
      
    }
    requestUpcomingMovies();
  } 
  ,[]);
  

    return(
        <>
        <div className="flex flex-col gap-6 md:gap-14">
          <div>
        <HeroCarousel/>
        </div>

        <div className="flex items-center justify-center">
          <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/lead-in-v3-collection-202102040828.png"
           alt="stream" />
        </div>
        
        <div className="container mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-gray-800 my-3 ">
          The Best of Entertainment
        </h1>
        <div className="container">
        <EntertainmentSlider />
        </div>
      </div>


      <div className="bg-prachi-800 py-12 ">

              <div className="flex items-center justify-center">
                  <img 
                  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                  alt="Premier"
                  className="w-5/6 h-full"/>
              </div>

      <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand New Realese every Friday" isDark/>

      </div>

      <div>
      <PosterSlider images={topRatedMovies} title="Top Rated Movies" subtitle="" isDark={false}/>
      </div>
      <div>
      <PosterSlider images={upcomingMovies} title="Upcoming Moives" subtitle="" isDark={false}/>
      </div>

    </div>

        </>
    )

};

export default Home;