import React,{useContext} from 'react';
import { MovieContext } from '../../context/movie.context';


const MovieHeroInfo = () => {

    const {movie}= useContext(MovieContext);

    //optional chaining
    const genres = movie.genres?.map(({name})=>name).join(", ");

    return (
        <>
        <div className="flex flex-col gap-4 lg:gap-8">
            <div>
                <div className="flex gap-4 text-sm">
                    <img src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt="premier"
                    className="h-4 lg:h-6" />
                    <span className="text-white bg-prachi-800 rounded-2xl px-2 text-xs lg:text-sm">
                        Streaming Now
                    </span>
                </div>

            </div>
            <h1 className="hidden lg:block text-white text-4xl font-bold"> {movie.original_title}</h1>
            <div className="flex flex-col-reverse gap-2 lg:gap-8 lg:flex-col">
            <div className="text-xs text-white flex flex-col gap-2 lg:gap-4 md:text-base lg:text-lg">
                <h3>
                {movie.original_language}&bull; Languages: Audio(1), Subtitles(1)
                </h3>
                <h3>
                {movie.runtime} mins&bull; {genres} &bull;16+ &bull; {movie.release_date}
                </h3>
                <p className="text-xs text-white lg:hidden">{movie.overview}</p>
            </div>
            <div className="flex gap-1 lg:gap-4">
                <button className="bg-red-600 rounded-md text-white w-1/2 font-bold py-1 md:py-2 lg:py-4 lg:rounded-xl ">Rent ₹149</button>
                <button className="bg-red-600 rounded-md text-white w-1/2 font-bold py-1 md:py-2 lg:py-4 lg:rounded-xl">Rent ₹689</button>
                
            </div>
            </div>
        </div>
            
        </>
    )
}


export default MovieHeroInfo;