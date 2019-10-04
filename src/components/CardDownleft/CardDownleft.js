import React from "react";
import './CardDownleft.css'
import Arrows from './Arrows/Arrows'

class CardDownleft extends React.Component{
    render(){
        return(
            <div className="carddownleft">
            <h1>Twitter Feed <small>#{this.props.city}</small></h1>
            <p>Don't forget your sunscreen tomorrow!</p>
            <p>Amazing weather in Paris!</p>
            <h3>NEXT</h3>   
            {/*    */}
            <Arrows/>
    </div>
        )
    }
}

export default CardDownleft;