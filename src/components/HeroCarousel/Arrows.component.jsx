import React from "react";

const NextArrow=(props)=>{
    //classNames
    //Styles
    //onclick
    return <>
    <div className={props.className}  style={props.style}  onClick={props.onClick}/>
    </>
}
const PrevArrow=(props)=>{
    return <>
    <div{...props}/></>
}

export {NextArrow, PrevArrow};