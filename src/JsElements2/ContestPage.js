import React from "react";
import '../CSSFiles2/ContestPage.css';
import CorousalCard from "./CorousalCard";

export default function ContestPage( prop){
    return (
        <div className="ContestPageContainer">
            <img src="res/ContestPicture.png" className="ContestPictureMain"/>
            <div className="CorousalCardContainer">
                <CorousalCard path='res/WeeklyCard.png'/>
                <CorousalCard path='res/BiweeklyCard.png'/>
            </div>
            <h2 className="H2Heading">Featured Contests</h2>
        </div>
    );
}