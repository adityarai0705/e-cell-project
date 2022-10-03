import React from "react";
import '../CSSFiles2/FeaturedBox.css';


export default function FeaturedBox( prop){
    return (
        <div className="FeaturedBoxBody">
            <img className='FeaturedBoxImage' src={prop.path}/>
            <div className="FeaturedBoxInfo">
                <b><p>{prop.name}</p></b>
                <p style={{fontSize:'10px'}}>{prop.schedule}</p>
            </div>
        </div>
    );
}