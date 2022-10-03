import React from "react";
import { Link } from "react-router-dom";
import '../CSSFiles/Profile.css'


export default function UserProfile(prop) {
    return (
        <>
            <div className="ProfileContainer">
                <img className="DisplayPicture" src="res/display.webp" width={'80px'} height={'80px'} style={{borderRadius:'5px'}} />
                <div style={{margin:'15px'}}>
                    <p><b>Lance.Corporal</b></p>
                    <p>Rank 2,023</p>
                </div>
            </div>
            <div className="EditProfileButton">
                <p>Edit Profile</p>
            </div>
            <div className="IconNamePair">
                <img src="res/location.png" width={'22px'} height={'27px'}/>
                <p>India</p>
            </div>
            <div className="IconNamePair">
                <img src="res/education.webp" width={'22px'} height={'27px'}/>
                <p>MNNIT</p>
            </div>
            <a className="IconNamePair" href="https://github.com/adityarai0705">
                <img src="res/github.png" width={'22px'} height={'27px'}/>
                <p>Aditya Rai github</p>
            </a>
            <a className="IconNamePair" href="https://www.linkedin.com/in/aditya-rai-844771226/?trk=nav_responsive_tab_profile_pic">
                <img src="res/linkedin.png" width={'22px'} height={'27px'}/>
                <p>Aditya Rai linkein</p>
            </a>
        </>
    );
}