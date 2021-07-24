import React from 'react';
import NavbarMdSm from '../components/Navbar/NavbarMdSm.component';


 const MovieLayout = (props) => {
    return (
        <>
        <NavbarMdSm/>
            {props.children}
        </>
    )
}
export default MovieLayout;
