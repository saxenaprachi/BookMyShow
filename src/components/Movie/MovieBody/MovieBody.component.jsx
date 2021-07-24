import React from 'react';
import {FaCcVisa, FaCcPaypal} from 'react-icons/fa';


const MovieBodyLg=()=>{
    return (
        <>
        <div className="container  my-10 flex flex-col gap-5 items-start w-3/5 mx-36">
        {/*About*/}
                <div className=" hidden lg:block flex flex-col gap-8">
                    <h1 className=" text-2xl font-bold">About the movie</h1>
                    <p className="top-10 text-lg">Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent.
                         Meanwhile, Darkseid sends Steppenwolf to Earth with an army to subjugate humans.</p>
                </div>

                <div className=" text-black">
                    <hr />
                </div>

        {/*Offers*/}
                <div className="flex flex-col gap-5 ">
                    <div className=" text-2xl font-bold">
                        <h1>Applicable offers</h1>
                    </div>
                    
                    <div className="flex gap-2">
                        <div className="flex gap-2 items-start px-3 py-3 bg-yellow-100 rounded-md border-yellow-200 border-dashed border-2">
                            <div className="w-6 h-6 ">
                                <FaCcVisa className="w-full h-full"/>
                         </div>
                            <div className="flex flex-col ">
                              <h3 className="text-lg font-bold">Visa Streaming Offers</h3>
                               <p className="text-md ">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-start px-3 py-3 bg-yellow-100 rounded-md border-yellow-200 border-dashed border-2">
                            <div className="w-6 h-6 ">
                                <FaCcPaypal className="w-full h-full"/>
                         </div>
                            <div className="flex flex-col ">
                              <h3 className="text-lg font-bold">Filmy Pass</h3>
                               <p className="text-md ">Get Rs.75* off on 3 movies you buy/rent on Stream. Buy Filmy Pass @Rs.99.</p>
                            </div>
                        </div>
                    </div>

                </div>
        {/*Cast*/}


        </div>
        </>
    )
};
const MovieBodyMd=()=>{
    return (
        <>
        </>
    )
};
const MovieBodySm=()=>{
    return (
        <>
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
