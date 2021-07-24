import React from 'react';
import settings from '../../Config/PosterCarosel.config';

import Slider from "react-slick";
import Poster from '../Poster/Poster.component';

 const PosterSlider = (props) => {
    return (
        <div>
            <div className="container mx-auto px-2">
          <div className={`flex flex-col py-6 ${props.isDark? "text-white" : "text-gray-800"}`}>
                <h2 className="font-bold text-2xl ">{props.title}</h2>
                <p>{props.subtitle}</p>
            </div>
            <Slider {...settings}>
            
            {props.images.map((image)=>(
                <Poster {...image} isDark={props.isDark}/>
            ))}
            </Slider>

            
        </div>
            
        </div>
    )
}

export default PosterSlider