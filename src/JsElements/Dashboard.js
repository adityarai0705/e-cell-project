import React from "react";
import '../CSSFiles/Dashboard.css';
import UserProfile from "./UserProfile.js";


export default function Dashboard( prop){
    return (
        <div className="DashboardContainer">
            <UserProfile/>
        </div>
    );
}