import React from "react";
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import CardUp from '../CardUp/CardUp'
import CardUpleft from '../CardUp/CardUpleft/CardUpleft'
import CardDownleft from '../CardDownleft/CardDownleft'
import CardDownright from '../CardDownright/CardDownright'

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // city: 'Sydney',
            isLoading: false,
            city: '',
            city_change: 'Sydney',
            current_teperature: '',
            current_weather: '',
            current_humidity: '',
            current_wind: '',
            weather_day1: '',
            temperature_day1: '',
            weather_icons_day1: '',
            weather_day2: '',
            temperature_day2: '',
            weather_icons_day2: '',
            weather_day3: '',
            temperature_day3: '',
            weather_icons_day3: '',
            weather_day4: '',
            temperature_day4: '',
            weather_icons_day4: '',
            weather_day5: '',
            temperature_day5: '',
            weather_icons_day5: '',
            date1: '',
            date2: '',
            date3: '',
            date4: '',
            date5: '',
        };
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ city: event.target.value });
    }

    handleSubmit = (event) => {
        // this.setState({ city: this.state.value });
        this.fetchWeather(this.state.city);
        // console.log(this.state.city);
        this.setState({
            city_change: this.state.city
        })
        event.preventDefault();
    }

    componentDidMount() {
        this.setState({
            isLoading: true,
        })
        // this.city = 'Sydney'
        this.fetchWeather('Sydney')
    }

    fetchWeather = (city) => {
        this.api = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=42c9a2f1315e0d41fa91334dc25969f6`;
        axios.get(this.api)
            .then(res => {
                console.log(res.data);
                this.setState({
                    isLoading: false,
                    // data: res.data,
                    city: res.data.city.name,

                    current_teperature: Math.round(res.data.list[0].main.temp),
                    current_weather: res.data.list[0].weather[0].main,
                    current_humidity: res.data.list[0].main.humidity,
                    current_wind: res.data.list[0].wind.speed,

                    weather_day1: res.data.list[0].weather[0].main,
                    temperature_day1: Math.round(res.data.list[0].main.temp),
                    weather_icons_day1: res.data.list[0].weather[0].icon,

                    weather_day2: res.data.list[1].weather[0].main,
                    temperature_day2: Math.round(res.data.list[1].main.temp),
                    weather_icons_day2: res.data.list[1].weather[0].icon,

                    weather_day3: res.data.list[2].weather[0].main,
                    temperature_day3: Math.round(res.data.list[2].main.temp),
                    weather_icons_day3: res.data.list[2].weather[0].icon,

                    weather_day4: res.data.list[3].weather[0].main,
                    temperature_day4: Math.round(res.data.list[3].main.temp),
                    weather_icons_day4: res.data.list[3].weather[0].icon,

                    weather_day5: res.data.list[4].weather[0].main,
                    temperature_day5: Math.round(res.data.list[4].main.temp),
                    weather_icons_day5: res.data.list[4].weather[0].icon,

                    date1: res.data.list[0].dt_txt,
                    date2: res.data.list[8].dt_txt,
                    date3: res.data.list[16].dt_txt,
                    date4: res.data.list[24].dt_txt,
                    date5: res.data.list[32].dt_txt,
                })
            })
    }

    render() {
        const { isLoading, city, city_change, current_teperature, current_weather, current_humidity, current_wind,
            weather_day1, temperature_day1, weather_icons_day1, date1,
            weather_day2, temperature_day2, weather_icons_day2, date2,
            weather_day3, temperature_day3, weather_icons_day3, date3,
            weather_day4, temperature_day4, weather_icons_day4, date4,
            weather_day5, temperature_day5, weather_icons_day5, date5,
        } = this.state
        if (isLoading) return 'Loading...'
        return (
            <div>
                <form>
                    <label>
                        <input type="text" value={city} onChange={this.handleChange} placeholder="City name" />
                    </label>
                    <button onClick={this.handleSubmit} ><FontAwesomeIcon icon={faSearch} /> </button>
                </form>

                <div className="Card">
                    <CardUp city={city_change} />
                    <CardUpleft current_teperature={current_teperature} current_humidity={current_humidity}
                        current_weather={current_weather} current_wind={current_wind} />
                    <CardDownleft city={city_change} />
                    <CardDownright weather_day1={weather_day1} temperature_day1={temperature_day1} weather_icons_day1={weather_icons_day1} date1={date1}
                        weather_day2={weather_day2} temperature_day2={temperature_day2} weather_icons_day2={weather_icons_day2} date2={date2}
                        weather_day3={weather_day3} temperature_day3={temperature_day3} weather_icons_day3={weather_icons_day3} date3={date3}
                        weather_day4={weather_day4} temperature_day4={temperature_day4} weather_icons_day4={weather_icons_day4} date4={date4}
                        weather_day5={weather_day5} temperature_day5={temperature_day5} weather_icons_day5={weather_icons_day5} date5={date5} />
                </div>
            </div>
        );
    }
}

export default Card;

