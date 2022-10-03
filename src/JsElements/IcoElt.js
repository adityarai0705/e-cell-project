import React from "react";
import '../CSSFiles/IcoElt.css'


export default function UserProfile(prop) {
    return (
        <div className="IcoEltContainer">
            <p style={{fontSize : '14px'}}>{prop.main_}</p>
            <p style={{fontSize : '11px'}}>{prop.sub_}</p>
        </ div>
    );
}