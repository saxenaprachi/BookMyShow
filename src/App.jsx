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




function App() {
  return (
    <>
    <StrictMode>
      <DefaultHOC path="/" exact component={Home} />
      <MovieHOC path="/movie/:id" exact component={MoviePage} />
    </StrictMode>
    </>
  );
}

export default App;