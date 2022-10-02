import React from "react";
import '../CSSFiles/MainDashboard.css'
// import IcoElt from './IcoElt.js'
import MainDashboardUpperLeft from "./MainDashboardUpperLeft";
import MainDashboardUpperRight from "./MainDashboardUpperRight";
import MainDashboardLower from "./MainDashboardLower";


export default function MainDashboard(prop) {
    return (
      <div className="MainDashboardContainer">
        <div className='UpperDashboard'>
          <MainDashboardUpperLeft/> 
          <MainDashboardUpperRight/>  
        </div>
        <div className="LowerDashboard">
          <MainDashboardLower/>
        </div>
      </div>
        
    );
}