import React from "react";
import './CardDownleft.css'
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
// import  {faCaretRight}  from '@fortawesome/free-solid-svg-icons';
import Arrows from './Arrows/Arrows'

const CardDownleft = (props)=> {
    return(
    <div className="carddownleft">
          <h1>Twitter Feed <small>#France</small></h1>
          <p>Don't forget your sunscreen tomorrow!</p>
          <p>Amazing weather in Paris!</p>
          <h3>NEXT</h3>   
          {/*    */}
          <Arrows/>
    </div>
    )
};

export default CardDownleft;