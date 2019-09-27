import React from "react";
import './Card_Up_Left.css'

const CardUpLeft = (props)=> {
    return(
        <div className="Card_Up_Left">
        <h1>12°</h1>
        <p>CLOUDY</p>
        <ul>
            <li>
            <p>humidity</p>
            <p>64%</p>
            </li>
            <li>
            <p>wind</p>
            <p>12 k/m</p>
            </li>
        </ul>
    </div>
    )
};

    export default CardUpLeft;