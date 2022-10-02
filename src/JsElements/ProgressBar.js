import React from "react";
import '../CSSFiles/ProgressBar.css'


export default function ProgressBar(prop) {
    return (
        <div className="BarContainer">
            <div className="Data">
                <p>{prop.tag}</p>
                <p>{prop.num}/{prop.den}</p>
                <p>Beats: {prop.perc}</p>
            </div>
            <div className="Bar" style={{backgroundColor:prop.color}}>
                <div className="Progress" style={{backgroundColor:prop.color}}>

                </div>
            </div>
        </ div>
    );
}