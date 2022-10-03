import React from "react";
import '../CSSFiles/ContestBar.css'


export default function ContestBar(prop) {
    return (
      <div className="ContestBarContainer">
         <div  className="ContestBarLeft">
            <img className="ContestBarimg" src={prop.path}/>
            <div className='ContestBarContestInfo'>
                <b><p>{prop.name}</p></b>
                <p style={{fontSize:'10px'}}>{prop.schedule}</p>
            </div>
         </div>
         <div  className="ContestBarRight">
            <div className="VirtualButton">
                <p style={{fontSize : '10px'}}>Virtual</p>
            </div>
         </div>
      </div>
    );
}