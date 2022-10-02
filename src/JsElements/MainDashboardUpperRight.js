import React from "react";
import '../CSSFiles/MainDashboardUpperRight.css'
// import ProgressBar from "./ProgressBar.js";


export default function MainDashboardUpperRight(prop) {
    return (
        <div className="CardR">
            <div className="BadgeInfo">
                <div className="BadgeCount">
                    <p>Badges</p>
                    <h6>0</h6>
                </div>
                <div className="BadgeSubInfo">
                    <p>Locked Badges</p>
                    <h6>Sep LeetCoding Challenge</h6>
                </div>
            </div>
            <div className="BadgeIcon">
                <h1>X</h1>
            </div>
        </div>
    );
}