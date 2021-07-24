import React from 'react';
import MovieBody from '../components/Movie/MovieBody/MovieBody.component';
import MovieHero from '../components/Movie/MovieHero.component';



 const MoviePage= () => {
    return (
        <div>
            <MovieHero/>
            <MovieBody/>
        </div>
    )
}

export default MoviePage;