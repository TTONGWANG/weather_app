import React from "react";
import './Card.css'
import CardUp from './CardUp/CardUp'
import CardDownleft from './CardDownleft/CardDownleft'
import CardDownright from './CardDownright/CardDownright'
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

