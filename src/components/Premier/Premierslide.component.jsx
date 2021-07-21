import React from 'react'
import Slider from 'react-slick';
import Poster from '../Poster/Poster.component';

 const PremierSlide = () => {

    const PremierImages=[
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
        {
        src: "https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:oi-discovery-catalog@@icons@@premiere-icon.png,ox-322,oy-20/et00047164-sztaxpptsc-portrait.jpg",
        alt: "zack",
         title: "Zacl",
        subtitle: "english",
        },
    ];

    const settings={
    infinity: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 2,
    InitialSlide: 0,
    centerMode: true,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          InitialSlide: 1,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],

    };



    return (
        <div className="container mx-auto px-2">
          <div className="text-white flex flex-col mx-16 py-6">
                <h2 className="font-bold text-2xl ">Premiers</h2>
                <p>Brand new realeases every Friday</p>
            </div>
            <Slider {...settings}>
            
            {PremierImages.map((image)=>(
                <Poster {...image} isDark/>
            ))}
            </Slider>

            
        </div>
    )
}
export default PremierSlide