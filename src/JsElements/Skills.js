import React from "react";
import '../CSSFiles/Skills.css'
import ElementCapsule from "./ElementCapsule.js";


export default function Skills(prop) {
    return (
        <>
            <b><p>Skills</p></b>
            <div className="SkillsContainer">
                <b><p>Advanced</p></b>
                <div className="Skills">
                    <ElementCapsule tag={'Backtracking'}/><p>x3</p>
                </div>
                <b><p>Intermediate</p></b>
                <div className="Skills">
                    <ElementCapsule tag={'Tree'}/><p>x6</p>
                    <ElementCapsule tag={'Depth First Search'}/><p>x6</p>
                </div>
                <b><p>Fundamental</p></b>
                <div className="Skills">
                    <ElementCapsule tag={'Strings'}/><p>x1</p>
                    <ElementCapsule tag={'Array'}/><p>x2</p>
                </div>
            </div>
        </>
    );
}