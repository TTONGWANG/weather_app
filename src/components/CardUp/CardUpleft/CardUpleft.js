import React from "react";
import './CardUpleft.css'

class CardUpleft extends React.Component{
    render(){
        return(
                <div className="cardupleft">
                    <h1>{this.props.current_teperature}</h1>
                    <div className="celsius"></div>
                    <p>{this.props.current_weather}</p>
                    <ul>
                        <li>
                        <p>humidity</p>
                        <p>{this.props.current_humidity}</p>
                        </li>
                        <li>
                        <p>wind</p>
                        <p>{this.props.current_wind} km/s</p>
                        </li>
                    </ul>
                </div>
        )
    }
}


export default CardUpleft;