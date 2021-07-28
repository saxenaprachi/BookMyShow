import React,{useContext} from 'react';
import { MovieContext } from '../../context/movie.context';
//info
import MovieHeroInfo from './MovieHeroInfo.component';

const HeroSm=()=>{

    const {movie}  = useContext(MovieContext);

    return(<>
        <div class="w-full h-48 absolute bottom-0 bg-black bg-opacity-50 z-10"/>
        <div className=" absolute z-10 bottom-0 flex flex-col px-4 py-4 w-full">
            <MovieHeroInfo/>
        </div>
        <img 
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} 
        alt="poster" 
        className=" h-full"/>
    </>);

}

const HeroMd=()=>{
    const {movie}  = useContext(MovieContext);
return(<>

<div class="w-full h-60 absolute bottom-0 bg-black bg-opacity-50 z-10" />
<div className=" absolute z-10 bottom-0 flex flex-col px-6 py-6 w-full">
            <MovieHeroInfo/>
 </div>
<img 
src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
alt="poster" />
</>)
}

const HeroLg =() =>{
    const {movie}  = useContext(MovieContext);
    return(<>

    <div className="absolute z-10 w-full h-full" 
    style={{backgroundImage:"linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)" }}/>
   <div className="flex absolute gap-10 w-full items-center z-10 px-36 py-24">
        <div className="  w-70 h-96">
            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt="poster"
            className="h-full w-full rounded-xl" />
        </div>
        <div className="flex flex-col">
            <MovieHeroInfo/>
        </div>
   </div>



    <img 
    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
    alt="poster" 
    className="w-full h-full"
    />

    

        </>)
}

const MovieHero = () => {
    return (
        <>
        <div>
            <div  className="relative md:hidden w-full" style={{ height: "calc(180vw)" }}>
                <HeroSm/>
            </div>
            <div className=" relative hidden md:block lg:hidden">
                <HeroMd/>
            </div>
            <div className=" relative hidden lg:block " style={{ height: "calc(35vw)" }}>
                <HeroLg/>
            </div>
        </div>

            
        </>
    )
}

export default MovieHero;
