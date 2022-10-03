import React from "react";
import '../CSSFiles/NavBar.css'
// import { Dimensions } from 'react-native';
// import DropDown from './DropDown';
import { useState, useEffect } from 'react';
import { Outlet, Link } from "react-router-dom";

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return width;
// }

export default function NavBar( prop){

    const [screenSize, getDimension] = useState({
        dynamicWidth: window.innerWidth,
        dynamicHeight: window.innerHeight
      });
      const setDimension = () => {
        getDimension({
          dynamicWidth: window.innerWidth,
          dynamicHeight: window.innerHeight
        })
      }
      
      useEffect(() => {
        window.addEventListener('resize', setDimension);
        
        return(() => {
            window.removeEventListener('resize', setDimension);
        })
      }, [screenSize])
    const windowWidth = screenSize.dynamicWidth;

    let element;

    if( windowWidth <= 680){
        element =
            <div>
                <ul className="NavBarMainContainer">
                    <li className="burgermenu"><a>X</a></li>
                    <li className="logo"><a>X</a></li>
                    <li className="bellicon"><a href="#">U</a></li>
                </ul>
            </ div>;
    }else{
        element =
        <div className="NavBarBG">
        <div className="NavBarMainContainer">
                <ul>
                    <li className="logo"><a href="#">X</a></li>
                    <li><a href="#">Explore</a></li>
                    <li><a href="#">Problems</a></li>
                    <li><Link to="/">Contests</Link></li>
                    <li><a href="#">Discuss</a></li>
                    <li><a href="#">Interview</a></li>
                    <li><a href="#" style={{color:'orange'}}>Store</a></li>
                    {/* <li><a href="#">
                        <DropDown name='Interview' op1='Online Interview' op2='Assessment' />
                    </a></li>
                    <li><a href="#">
                        <DropDown name='Store' op1='Redeem' op2='Premium' />
                    </a></li> */}
                </ul>
                <ul>
                    <li className="premium"><a href="#">Premium</a></li>
                    <li className="bellicon"><a href="#">X</a></li>
                    <li><a href="#">X</a></li>
                    <li><Link to="/dashboard">X</Link></li>
                </ul>
                <Outlet/>
        </ div>
        
        </div>;
    }

    return element;
}