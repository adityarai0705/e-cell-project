import React from "react";
import '../CSSFiles/ProblemBar.css'


export default function ProblemBar(prop) {
    return (
      <div className="ProblemBarContainer" style={{backgroundColor : prop.color}}>
        <p>{prop.problemName}</p>
        <p>{prop.time} ago</p>
      </div>
        
    );
}