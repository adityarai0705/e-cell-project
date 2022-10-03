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
                    <div className="subSkills"><ElementCapsule tag={'Backtracking'}/><p style={{fontSize : '11px'}}>x3</p></div>
                    
                </div>
                <b><p>Intermediate</p></b>
                <div className="Skills">
                    <div className="subSkills"><ElementCapsule tag={'Tree'}/><p style={{fontSize : '11px'}}>x6</p></div>
                    <div className="subSkills"><ElementCapsule tag={'Depth First Search'}/><p style={{fontSize : '11px'}}>x6</p></div>
                    
                    
                </div>
                <b><p>Fundamental</p></b>
                <div className="Skills">
                    <div className="subSkills"><ElementCapsule tag={'Strings'}/><p style={{fontSize : '11px'}}>x1</p></div>
                    <div className="subSkills"><ElementCapsule tag={'Array'}/><p style={{fontSize : '11px'}}>x2</p></div>
                    
                   
                </div>
            </div>
        </>
    );
}