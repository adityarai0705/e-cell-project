import React from "react";
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
                <p>X</p><p>India</p>
            </div>
            <div className="IconNamePair">
                <p>X</p><p>MNNIT</p>
            </div>
            <div className="IconNamePair">
                <p>X</p><p>Test User</p>
            </div>
            <div className="IconNamePair">
                <p>X</p><p>test-user</p>
            </div>
        </>
    );
}