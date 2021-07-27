import React from 'react';

import About from './about/about.component';
import Buzz from './Buzz/Buzz.component';
import Cast from './cast/Cast.component';
import Offers from './offers/offers.component';
import Review from './review/review.component';
import Youmaylike from './you may like/Youmaylike.component';







const MovieBodyLg=()=>{
    return (
        <>
        <div className="container  my-10 flex flex-col gap-5 items-start w-3/5 mx-36">
        
            <About/>
            <hr/>
            <Offers/>
            <hr/>
            <Cast/>
            <hr/>
            <div className="flex flex-col gap-5 w-full">
                 <h1 className=" text-2xl font-bold">Reviews</h1>
                <Review/>
            </div>
            <Buzz/>
            <Youmaylike/>
        </div>
        </>
    )
};
const MovieBodyMd=()=>{
    return (
        <>
        <div className="container my-6 flex flex-col gap-5 w-full items-center">
        <Review/>
        <Offers/>
        <Cast/>
        <Buzz/>
        <Youmaylike/>
        </div>
        </>
    )
};
const MovieBodySm=()=>{
    return (
        <>
        <div className="container my-6 flex flex-col gap-5 items-center w-full ">
        <Review/>
        <Offers/>
        <Cast/>
        <Buzz/>
        <Youmaylike/>
        </div>
        </>
    )
};

const MovieBody = () => {
    return (
        <>
        <div>
            <div className="hidden lg:block">
                <MovieBodyLg/>
            </div>
            <div className="hidden md:block lg:hidden">
                <MovieBodyMd/>
            </div>
            <div className="md:hidden ">
                <MovieBodySm/>
            </div>
        </div>
            
        </>
    )
}
export default MovieBody;
