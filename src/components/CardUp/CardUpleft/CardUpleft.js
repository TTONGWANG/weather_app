import React from "react";
import './CardUpleft.scss'

class CardUpleft extends React.Component{
    render(){
        return(
                <div className="cardupleft">
                    <h1>{Math.round(this.props.data[0].main.temp)}</h1>
                    <div className="cardupleft__celsius"></div>
                    <p>{this.props.data[0].weather[0].main}</p>
                    <ul>
                        <li>
                        <p className = "cardupleft__detial">humidity</p>
                        <p className = "cardupleft__detial">{this.props.data[0].main.humidity}</p>
                        </li>
                        <li>
                        <p className = "cardupleft__detial">wind</p>
                        <p className = "cardupleft__detial">{this.props.data[0].wind.speed} km/s</p>
                        </li>
                    </ul>
                </div>
        )
    }
}


export default CardUpleft;