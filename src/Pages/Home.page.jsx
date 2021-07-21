import React from "react";
import EntertainmentSlider from "../components/Entertainment/EntertainmentCard.component";
import HeroCarousel from "../components/HeroCarousel/HeroCarousel.component";
import PremierSlide from "../components/Premier/Premierslide.component";



const Home =(props)=>{

    return(
        <><div>
        <HeroCarousel/>
        </div>
        
        <div className="container mx-auto px-4">
        <h1 className="text-2xl font-extrabold text-gray-800 my-3 mx-16">
          The Best of Entertainment
        </h1>
        <EntertainmentSlider />
      </div>


      <div className="bg-prachi-800 py-12 ">

              <div className="flex items-center justify-center">
                  <img 
                  src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" 
                  alt="Premier"
                  className="w-5/6 h-full"/>
              </div>

      <PremierSlide/>

      </div>

        </>
    )

};

export default Home;