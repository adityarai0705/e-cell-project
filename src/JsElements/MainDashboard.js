import React from "react";
import '../CSSFiles/MainDashboard.css'
// import IcoElt from './IcoElt.js'
import MainDashboardUpperLeft from "./MainDashboardUpperLeft";
import MainDashboardUpperRight from "./MainDashboardUpperRight";


export default function MainDashboard(prop) {
    return (
        <div className='UpperDashboard'>
          <MainDashboardUpperLeft/> 
          <MainDashboardUpperRight/>  
        </div>
    );
}