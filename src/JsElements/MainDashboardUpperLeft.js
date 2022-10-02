import React from "react";
import '../CSSFiles/MainDashboardUpperLeft.css'
import ProgressBar from "./ProgressBar.js";


export default function MainDashboardUpperLeft(prop) {
    return (
        <div className="Card">
            <p>Solved Problems</p>
            <ProgressBar tag='Easy' num='21' den='592' perc='52.8%' color='green'/>
            <ProgressBar tag='Easy' num='21' den='592' perc='52.8%' color='yellow'/>
            <ProgressBar tag='Easy' num='21' den='592' perc='52.8%' color='red'/>
        </div>
    );
}