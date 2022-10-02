import React from "react";

export default function DropDown( prop){
    
    return(
       <>
            <label for='dropdown'> {prop.name} </label>

            <select name='dropdown'>
                <option> {prop.op1} </option>
                <option> {prop.op2} </option>
            </select>
       </>
    )
}