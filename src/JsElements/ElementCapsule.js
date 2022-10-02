import React from "react";
import '../CSSFiles/ElementCapsule.css'

export default function ElementCapsule(prop) {
    return (
        <div className="element">{prop.tag}</div>
    );
}