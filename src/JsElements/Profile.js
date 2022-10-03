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
                <Link to="#"><img src="res/location.png" width={'22px'} height={'27px'}/></Link>
                <p>India</p>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/education.webp" width={'22px'} height={'27px'}/></Link>
                <p>MNNIT</p>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/github.png" width={'22px'} height={'27px'}/></Link>
                <p>Test User</p>
            </div>
            <div className="IconNamePair">
                <Link to="#"><img src="res/linkedin.png" width={'22px'} height={'27px'}/></Link>
                <p>test-user</p>
            </div>
        </>
    );
}