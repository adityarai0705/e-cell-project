import React from "react";
import '../CSSFiles/UserProfile.css'
import Profile from './Profile.js';
import CommunityStats from './CommunityStats.js';
import Languages from "./Languages.js";
import Skills from "./Skills.js";


export default function UserProfile( prop){
    return (
        <div className="UserProfileContainer">
            <Profile />
            <hr/>
            <CommunityStats/>
            <hr/>
            <Languages/>
            <hr/>
            <Skills/>
        </div>
    );
}