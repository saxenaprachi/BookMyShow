// HOC
import DefaultHOC from "./hoc/Default.HOC";
import MovieHOC from "./hoc/Movie.HOC";





// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//pages
import Home from "./Pages/Home.page";

import { StrictMode } from "react";
import MoviePage from "./Pages/Movie.page";
import Plays from "./Pages/Plays.page";

//axios
import axios from "axios";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params= {};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;


function App() {
  return (
    <>
    <StrictMode>
      <DefaultHOC path="/" exact component={Home} />
      <DefaultHOC path="/plays" exact component={Plays} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </StrictMode>
    </>
  );
}

export default App;