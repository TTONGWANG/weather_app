import React from "react";
import './CardUpleft.scss'

class CardUpleft extends React.Component{
    render(){
        return(
                <div className="cardupleft">
                    <h1>{this.props.current_teperature}</h1>
                    <div className="cardupleft__celsius"></div>
                    <p>{this.props.current_weather}</p>
                    <ul>
                        <li>
                        <p className = "cardupleft__detial">humidity</p>
                        <p className = "cardupleft__detial">{this.props.current_humidity}</p>
                        </li>
                        <li>
                        <p className = "cardupleft__detial">wind</p>
                        <p className = "cardupleft__detial">{this.props.current_wind} km/s</p>
                        </li>
                    </ul>
                </div>
        )
    }
}


export default CardUpleft;