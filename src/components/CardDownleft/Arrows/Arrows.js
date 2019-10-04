import React from "react";
import './Arrows.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCaretRight}  from '@fortawesome/free-solid-svg-icons';

const Arrows = (props)=> {
    return(
        <div className="arrows">
            <button ><FontAwesomeIcon icon={faCaretRight} /></button>
        </div>
    )
};

export default Arrows;