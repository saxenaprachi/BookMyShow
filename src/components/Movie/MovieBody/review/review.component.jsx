import React from 'react'

 const Review= () => {
    return (
        <>
            <div className="flex gap-6 bg-gray-100 rounded py-2 px-3 items-center md:w-4/5 justify-between">
                <div className="flex flex-col gap-2 ">
                    <h3 className="fs4 font-bold">Add your rating and review</h3>
                    <p className="fs5 text-gray-700">Your ratings matter</p>
                </div>
                <div className="bg-red-500 rounded-md  h-6 py-1 px-1 cursor-pointer ">
                    <h5 className=" text-xs text-white font-bold">Rate Now</h5>
                </div>
            </div>
        </>
    )
}
export default Review;