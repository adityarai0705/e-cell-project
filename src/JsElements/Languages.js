import React from "react";
import '../CSSFiles/Languages.css'
import ElementCapsule from "./ElementCapsule.js";


export default function Languages(prop) {
    return (
        <>
            <b><p>Languages</p></b>
            <div className="LanguagesContainer">
                    <ElementCapsule tag={'C++'}/>
            </div>
        </>
    );
}