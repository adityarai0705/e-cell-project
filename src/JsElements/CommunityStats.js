import React from "react";
import { Link } from "react-router-dom";
import '../CSSFiles/CommunityStats.css'
import IcoElt from './IcoElt.js'


export default function CommunityStats(prop) {
    return (
        <>
            <div className="CommunityStatsHeading">
                <b><p>Community Stats</p></b>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/eye.png" width={'22px'} height={'27px'}/></Link>
                <IcoElt main_='Views 0' sub_='Last week 0'/>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/bluetick.png" width={'22px'} height={'27px'}/></Link>
                <IcoElt main_='Solution 0' sub_='Last week 0'/>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/chat.png" width={'22px'} height={'27px'}/></Link>
                <IcoElt main_='Discuss 0' sub_='Last week 0'/>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/star.png" width={'22px'} height={'27px'}/></Link>
                <IcoElt main_='Reputation 0' sub_='Last week 0'/>
            </div>
        </>
    );
}