import React from 'react';
import {FaCcVisa, FaCcPaypal} from 'react-icons/fa';

 const Offers = () => {
    return (
        <>
            {/*Offers*/}
            <div className="flex flex-col gap-5 ">
                    <div className=" text-2xl font-bold">
                        <h1>Applicable offers</h1>
                    </div>
                    
                    <div className="md:flex gap-2">
                        <div className="flex gap-2 items-start px-3 py-3 bg-yellow-100 rounded-md border-yellow-200 border-dashed border-2 my-3">
                            <div className="w-6 h-6 ">
                                <FaCcVisa className="w-full h-full"/>
                            </div>
                            <div className="flex flex-col">
                              <h3 className="text-lg font-bold">Visa Streaming Offers</h3>
                               <p className="text-md ">Get 50% off up to INR 150 on all RuPay cards* on BookMyShow Stream.</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-start px-3 py-3 bg-yellow-100 rounded-md border-yellow-200 border-dashed border-2 my-3">
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
        </>
    )
}

export default Offers;
