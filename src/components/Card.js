import React from "react";
import './Card.css'
import CardUp from './Card_Up/Card_Up'
import CardDownleft from './Card_Down_Left/Card_Down_Left'
import CardDownright from './Card_Down_Right/Card_Down_Right'

const Card = (props)=> {
    return(
        <div className="Card">
             <CardUp/>
             <CardDownleft/>
             <CardDownright/>
        </div>
    )
};
export default Card;

