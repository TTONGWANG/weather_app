import React from "react";
import CardUp from '../CardUp/CardUp'
import CardUpleft from '../CardUp/CardUpleft/CardUpleft'
// import CardDownleft from '../CardDownleft/CardDownleft'
import CardDownright from '../CardDownright/CardDownright'
import './Card.scss'

class Card extends React.Component {
    render() {
        return (      
            <div>
                <div className="Card">
                    <CardUp city={this.props.city} />
                    <CardUpleft current_teperature={Math.round(this.props.data[0].main.temp)} current_humidity={this.props.data[0].main.humidity}
                        current_weather={this.props.data[0].weather[0].main} current_wind={this.props.data[0].wind.speed} />
                    <CardDownright data= {this.props.data}/>
                </div>
            </div>
        );
    }
}

export default Card;

