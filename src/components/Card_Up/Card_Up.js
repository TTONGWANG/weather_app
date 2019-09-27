import React from "react";
import './Card_Up.css'

const CardUp = (props)=> {
    return(
    <div className="Card_Up">
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
    <h2>FRANCE</h2>
  </div>
  )
};

export default CardUp;
