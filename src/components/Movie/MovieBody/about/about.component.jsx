import React,{useContext} from 'react';
import {MovieContext} from '../../../../context/movie.context';

const About = () => {


    const {movie}  = useContext(MovieContext);

    return (
        <>
            {/*About*/}
            <div className="flex flex-col gap-8">
                    <h1 className=" text-2xl font-bold">About the movie</h1>
                    <p className="top-10 text-lg">{movie.overview}</p>
                </div>

        </>
    )
}

export default About;
