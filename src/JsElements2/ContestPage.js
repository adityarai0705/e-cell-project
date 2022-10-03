import React from "react";
import '../CSSFiles2/ContestPage.css';
import CorousalCard from "./CorousalCard";
import FeaturedBox from "./FeaturedBox";
import ContestLower from "./ContestLower";

export default function ContestPage( prop){
    return (
        <div className="ContestPageContainer">
            <img src="res/ContestPicture.png" className="ContestPictureMain"/>
            <div className="CorousalCardContainer">
                <CorousalCard path='res/WeeklyCard.png' name='Weekly Contest 311' schedule='Sunday 8:00 AM GMT+5:30'/>
                <CorousalCard path='res/BiweeklyCard.png' name='Biweekly Contest 87' schedule='Saturday 8:00 PM GMT+5:30'/>
            </div>
            <h2 className="H2Heading">Featured Contests</h2>
            <div className="FeaturedContestContainer">
                <FeaturedBox name="Weekly Contest 291" path="res/WeeklyCard.png" schedule="Ended May 1, 2022"/>
                <FeaturedBox name="Weekly Contest 291" path="res/WeeklyCard.png" schedule="Ended May 1, 2022"/>
                <FeaturedBox name="Weekly Contest 291" path="res/WeeklyCard.png" schedule="Ended May 1, 2022"/>
            </div>
            <ContestLower/>
        </div>
    );
}