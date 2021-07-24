import React from "react";
import EntertainmentSlider from "../components/Entertainment/EntertainmentCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
import TempPosters from "../Config/TempPoster.config";





const Home =(props)=>{

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

      <PosterSlider images={TempPosters} title="Premiers" subtitle="Brand New Realese every Friday" isDark/>

      </div>

      <div>
      <PosterSlider images={TempPosters} title="Online Streaming Events" subtitle="" isDark={false}/>
      </div>
      <div>
      <PosterSlider images={TempPosters} title="Outdoor Events" subtitle="" isDark={false}/>
      </div>
      <div>
      <PosterSlider images={TempPosters} title="Laughter Therapy" subtitle="" isDark={false}/>
      </div>
      <div>
      <PosterSlider images={TempPosters} title="Popular Events" subtitle="" isDark={false}/>
      </div>
      </div>

        </>
    )

};

export default Home;