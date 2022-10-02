import React from "react";
import '../CSSFiles/CommunityStats.css'
import IcoElt from './IcoElt.js'


export default function CommunityStats(prop) {
    return (
        <>
            <div className="CommunityStatsHeading">
                <b><p>Community Stats</p></b>
            </div>
            <div className="IconNamePair">
                <p>X</p>
                <IcoElt main_='View' sub_='Last week'/>
            </div>
            <div className="IconNamePair">
                <p>X</p>
                <IcoElt main_='View' sub_='Last week'/>
            </div>
            <div className="IconNamePair">
                <p>X</p>
                <IcoElt main_='View' sub_='Last week'/>
            </div>
            <div className="IconNamePair">
                <p>X</p>
                <IcoElt main_='View' sub_='Last week'/>
            </div>
        </>
    );
}