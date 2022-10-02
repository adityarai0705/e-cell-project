import React from "react";
import '../CSSFiles/MainDashboardLower.css'
import ProblemBar from "./ProblemBar.js";
// import ProgressBar from "./ProgressBar.js";


export default function MainDashboardLower(prop) {
    return (
        <div className="MainDashboardLowerContainer">
        <div className="Solntabs">
            <ul className="SolnSubtabs">
                <li><a href="#" className="SolnBtns active">Recent AC</a></li>
                <li><a href="#" className="SolnBtns">Solutions</a></li>
                <li><a href="#" className="SolnBtns">Discuss</a></li>
            </ul>
            <a>view all submissions</a>
        </div>
        <div className="Problems">
            <ProblemBar problemName='Problem X' time='1 day' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='Ram and his cycle' time='1 day' color='white' />
            <ProblemBar problemName='XYZ and sorted string' time='3 days' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='Bumble bee' time='7 days' color='white' />
            <ProblemBar problemName='Mikasa' time='7 days' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='Shinigami and his apples' time='18 days' color='white' />
            <ProblemBar problemName='Blue Bird' time='18 days' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='Birds' time='19 days' color='white' />
            <ProblemBar problemName='Pink Lemon' time='20 days' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='Asta and his swords' time='25 days' color='white' />
            <ProblemBar problemName='Andy the Ant' time='1 month' color='rgb( 248, 248, 250)' />
            <ProblemBar problemName='The Car Race' time='1 month' color='white' />
            <ProblemBar problemName='Empty village' time='1 month' color='rgb( 248, 248, 250)' />
        </div>
        </div>
    );
}