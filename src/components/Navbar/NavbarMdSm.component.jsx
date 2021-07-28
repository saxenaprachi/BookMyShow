import React,{useContext} from "react";
import { BiSearch, BiShareAlt } from "react-icons/bi";
import { GiHamburgerMenu} from "react-icons/gi";
import { FiChevronDown} from "react-icons/fi";
import { MovieContext } from "../../context/movie.context";



const NavMdSm =() =>{

    const {movie} = useContext(MovieContext);

    return <>
    <div className="flex justify-between items-center ">
        <div className="flex-col justify-around px-3 py-2">
            <h3 className=" text-md">
                {movie.original_title}
            </h3>
        </div>
        <div className="text-2xl px-3">
            <BiShareAlt/>
        </div>
    </div>
    </>
}
const NavLg =() =>{
    return <>
    <div className="flex justify-between w-full my-1">

        <div className="flex items-center w-3/5 ml-36">
            <div className=" flex items-center  text-xl font-medium w-1/5">
                book
                <img className="h-12 w-12"src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" />
                show
            </div>

            <div className="w-3/5">
                <div className="bg-white my-3 w-11/12 rounded py-2">
                     <div className="flex w-full items-center gap-3 ">
                        <BiSearch style={{color:"black"}} className="mx-3"/>
                        <input  className="w-11/12 focus:outline-none bg-transparent"type="search" placeholder="Movie, Event and Shows near you"/>

                    </div>
                </div>
            </div>
        </div>

        <div className="flex gap-8 items-center mx-36">

            <div className="flex text-xs items-center gap-1 ">
            <span className="text-lg text-gray-200 hover:text-white cursor-pointer">NCR</span>
            <div>
                <FiChevronDown className="text-md"/>
            </div>
            </div>

            
            <button className="bg-red-500 text-sm rounded px-3 py-1 text-md">Sign in</button>
            <GiHamburgerMenu className="text-2xl"/>
        </div>
    </div>
    </>
}

const NavbarMdSm = () =>{
    return(<>
        <nav className=" text-white w-full absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-gray-800">
            <div className=" absolute inset-x-0 z-30 w-full lg:hidden">
              <NavMdSm />
            </div>

            <div className="hidden lg:flex w-full">
            <NavLg />
            </div>

        </nav>
    </>);
};

export default NavbarMdSm;