import React from "react";
import './CardUp.css'
import CardUpleft from './CardUpleft/CardUpleft'

const CardUp = (props)=> {
    return(
    <div className="cardup">
      <CardUpleft/>
      <h2>FRANCE</h2>
    </div>
  )
};

export default CardUp;
