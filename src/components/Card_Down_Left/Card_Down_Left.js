import React from "react";
import './Card_Down_Left.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCaretRight}  from '@fortawesome/free-solid-svg-icons';

const CardDownleft = (props)=> {
    return(
    <div className="Card_Down_Left">
          <h1>Twitter Feed <small>#France</small></h1>
          <p>Don't forget your sunscreen tomorrow!</p>
          <p>Amazing weather in Paris!</p>
          <h3>NEXT</h3>   
          {/*    */}
          <div className="arrows"><FontAwesomeIcon icon={faCaretRight} /></div>
    </div>
    )
};

export default CardDownleft;