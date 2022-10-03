import React from "react";
import '../CSSFiles2/CorousalCard.css';


export default function CorousalCard( prop){
    return (
        <div className="CorousalCardBody">
            <img src={prop.path} width={'100%'} heigth={'70%'}/>
            <div className="CorousalCardInfo">

            </div>
        </div>
    );
}