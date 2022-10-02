import React from "react";
import '../CSSFiles/IcoElt.css'


export default function UserProfile(prop) {
    return (
        <div className="IcoEltContainer">
            <p>{prop.main_}</p>
            <p>{prop.sub_}</p>
        </ div>
    );
}