import React from "react";
import './Card.css'
import CardUp from '../CardUp/CardUp'
import CardUpleft from '../CardUp/CardUpleft/CardUpleft'
import CardDownleft from '../CardDownleft/CardDownleft'
import CardDownright from '../CardDownright/CardDownright'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city_change: 'Sydney',
        };
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="Card">
                    <CardUp city={this.state.city_change} />
                    <CardUpleft current_teperature={this.props.current_teperature} current_humidity={this.props.current_humidity}
                        current_weather={this.props.current_weather} current_wind={this.props.current_wind} />
                    <CardDownleft city={this.props.city_change} />
                    <CardDownright weather_day1={this.props.weather_day1} temperature_day1={this.props.temperature_day1} weather_icons_day1={this.props.weather_icons_day1} date1={this.props.date1}
                        weather_day2={this.props.weather_day2} temperature_day2={this.props.temperature_day2} weather_icons_day2={this.props.weather_icons_day2} date2={this.props.date2}
                        weather_day3={this.props.weather_day3} temperature_day3={this.props.temperature_day3} weather_icons_day3={this.props.weather_icons_day3} date3={this.props.date3}
                        weather_day4={this.props.weather_day4} temperature_day4={this.props.temperature_day4} weather_icons_day4={this.props.weather_icons_day4} date4={this.props.date4}
                        weather_day5={this.props.weather_day5} temperature_day5={this.props.temperature_day5} weather_icons_day5={this.props.weather_icons_day5} date5={this.props.date5} />
                </div>
            </div>
        );
    }
}

export default Card;

