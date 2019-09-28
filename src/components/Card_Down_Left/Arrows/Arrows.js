import React from "react";
import './Arrows.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCaretRight}  from '@fortawesome/free-solid-svg-icons';

const Arrows = (props)=> {
    return(
        <div className="Arrows"><FontAwesomeIcon icon={faCaretRight} /></div>
    )
};

export default Arrows;