import React from "react";
import './CardUpleft.css'

const CardUpleft = (props)=> {
    return(
        <div className="cardupleft">
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

export default CardUpleft;