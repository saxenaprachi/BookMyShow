import React,{useEffect,useContext} from 'react';
import NavbarMdSm from '../components/Navbar/NavbarMdSm.component';
import { useParams } from 'react-router-dom';
import { MovieContext } from '../context/movie.context';
import axios from 'axios';

 const MovieLayout = (props) => {

    const {id}=useParams();


    const {movie, setMovie} = useContext(MovieContext);
    

    useEffect(() => {
        const requestMovie =async()=>{
            const getMovieData = await axios.get(`/movie/${id}`);
            setMovie(getMovieData.data);
        }
        requestMovie();
    }, [id])

    return (
        <>
        <NavbarMdSm/>
            {props.children}
        </>
    )
}
export default MovieLayout;
