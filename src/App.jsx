// HOC
import DefaultHOC from "./hoc/Default.HOC";

//component
import Navbar from "./components/Navbar/navbar.component";




// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//pages
import Home from "./Pages/Home.page";
import { StrictMode } from "react";



function App() {
  return (
    <>
    <StrictMode>
      <DefaultHOC path="/" exact component={Navbar} />
      <DefaultHOC path="/" exact component={Home} />
    </StrictMode>
    </>
  );
}

export default App;