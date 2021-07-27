import React from 'react';
import Slider from 'react-slick';


const Cast = () => {

    const CastDetails =[
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
       
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
        {
            src :"https://in.bmscdn.com/iedb/artist/images/website/poster/large/henry-cavill-23964-04-05-2020-04-25-14.jpg",
            title:"Henry Cavill",
            subtitle:"as Superman/ Clark Kent",
        },
       
       
       
    ];

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
                  CastDetails.map((cast)=>(
                      <div className="flex flex-col gap-2 px-4">
                          <img className="rounded-full" src={cast.src} alt={cast.title} />
                          <h3 className="fs3 font-bold text-center ">{cast.title}</h3>
                          <p className="text-xs text-gray-600 text-center">{cast.subtitle}</p>
                      </div>
                  ))
              }


          </Slider>
          </div>

        </>
    )
}

export default Cast;
