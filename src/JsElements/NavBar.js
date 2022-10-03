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

    if( windowWidth <= 705){
        element =
            <div>
                <ul className="NavBarMainContainer">
                    <li className="NavicoCont"><img src="res/burger.png" width={'22px'} height={'27px'}/></li>
                    <li className="NavicoCont"><img src="res/logo.png" width={'22px'} height={'27px'}/></li>
                    <li className="NavicoCont"><img src="res/bell.png" width={'22px'} height={'27px'}/></li>
                </ul>
            </ div>;
    }else{
        element =
        <div className="NavBarBG">
        <div className="NavBarMainContainer">
                <ul>
                    <li className="NavicoCont logo"><img src="res/logo.png" width={'22px'} height={'27px'}/></li>
                    <li><Link to="#">Explore</Link></li>
                    <li><Link to="#">Problems</Link></li>
                    <li><Link to="/">Contests</Link></li>
                    <li><Link to="#">Discuss</Link></li>
                    <li><Link to="#">Interview</Link></li>
                    <li><Link to="#" style={{color:'orange'}}>Store</Link></li>
                    {/* <li><a href="#">
                        <DropDown name='Interview' op1='Online Interview' op2='Assessment' />
                    </a></li>
                    <li><a href="#">
                        <DropDown name='Store' op1='Redeem' op2='Premium' />
                    </a></li> */}
                </ul>
                <ul>
                    <li className="premium"><Link to="#">Premium</Link></li>
                    <li className="NavicoCont"><Link to="#"><img src="res/bell.png" width={'22px'} height={'27px'}/></Link></li>
                    <li className="NavicoCont"><Link to="#"><img src="res/fire.png" width={'22px'} height={'27px'}/></Link></li>
                    <li className="NavicoCont"><Link to="/dashboard"><img src="res/profilesmall.png" width={'22px'} height={'27px'}/></Link></li>
                </ul>
                <Outlet/>
        </ div>
        
        </div>;
    }

    return element;
}