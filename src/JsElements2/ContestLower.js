import React from "react";
import '../CSSFiles2/ContestLower.css'
import ContestBar from "./ContestBar.js";
// import ProgressBar from "./ProgressBar.js";


export default function ContestLower(prop) {
    return (
        <div className="ContestLowerContainer">
        <div className="ContestTabs">
            <ul className="ContestSubTabs">
                <li><a href="#" className="ContsBtns active">Past Contests</a></li>
                <li><a href="#" className="ContsBtns">My Contests</a></li>
            </ul>
            <a style={{fontSize : '11px'}}>Virtual Contest</a>
        </div>
        <div className="Problems">
            <ContestBar name='Weekly Contest 309' schedule='Sept 4 8:00 AM GMT+5:30' path='res/BiweeklyCard.png'/>
            <ContestBar name='Weekly Contest 309' schedule='Sept 4 8:00 AM GMT+5:30' path='res/BiweeklyCard.png'/>
            <ContestBar name='Weekly Contest 309' schedule='Sept 4 8:00 AM GMT+5:30' path='res/BiweeklyCard.png'/>
            <ContestBar name='Weekly Contest 309' schedule='Sept 4 8:00 AM GMT+5:30' path='res/BiweeklyCard.png'/>
            <ContestBar name='Weekly Contest 309' schedule='Sept 4 8:00 AM GMT+5:30' path='res/BiweeklyCard.png'/>
        </div>
        </div>
    );
}