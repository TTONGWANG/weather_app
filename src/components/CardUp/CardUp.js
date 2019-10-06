import React from "react";
import './CardUp.css'

class CardUp extends React.Component{
render(){
    return(
        <div className="cardup" >
        <h2>{this.props.city}</h2>
        </div>
    )}
}

export default CardUp;
