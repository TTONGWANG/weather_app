import React from "react";
import './Card.css'
// import CardUp from './CardUp/CardUp'
// import CardUpleft from './CardUp/CardUpleft/CardUpleft'
// import CardDownleft from './CardDownleft/CardDownleft'
// import CardDownright from './CardDownright/CardDownright'
// import axios from 'axios';

// class Card extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             isLoading: false,
//             city: '',
//             current_teperature: '',
//             current_weather: '',
//             current_humidity: '',
//             current_wind: '',
//             weather_day1: '',
//             temperature_day1: '',
//             weather_icons_day1: '',
//             weather_day2: '',
//             temperature_day2: '',
//             weather_icons_day2: '',
//             weather_day3: '',
//             temperature_day3: '',
//             weather_icons_day3: '',
//             weather_day4: '',
//             temperature_day4: '',
//             weather_icons_day4: '',
//             weather_day5: '',
//             temperature_day5: '',
//             weather_icons_day5: '',
//             date1: '',
//             date2: '',
//             date3: '',
//             date4: '',
//             date5: '',
//         }
//     }

// componentDidUpdate() {
//     const { city } = this.props;
//     switch (city) {
//         case "Paris":
//             this.api =
//                 "http://api.openweathermap.org/data/2.5/forecast?q=Paris,fr&APPID=42c9a2f1315e0d41fa91334dc25969f6";
//             break;
//         case "Sydney":
//             this.api =
//                 "http://api.openweathermap.org/data/2.5/forecast?q=Sydney,au&APPID=42c9a2f1315e0d41fa91334dc25969f6";
//             break;
//         default:
//             this.api =
//                 "http://api.openweathermap.org/data/2.5/forecast?q=Beijing,cn&APPID=42c9a2f1315e0d41fa91334dc25969f6";
//             break;
//     }
//     this.fetchWeather();
// }
// componentDidUpdate(){
//     // this.fetchWeather();
// }
// componentDidMount() {
//     this.setState({
//         isLoading: true,
//     })
//     this.fetchWeather()
// }

// fetchWeather = () => {
//     this.api = `http://api.openweathermap.org/data/2.5/forecast?q=${this.props.city}&units=metric&APPID=42c9a2f1315e0d41fa91334dc25969f6`;
//     axios.get(this.api)
//         .then(res => {
//             console.log(res.data);
//             this.setState({
//                 isLoading: false,
//                 city: res.data.city.name,

//                 current_teperature: Math.round(res.data.list[0].main.temp),
//                 current_weather: res.data.list[0].weather[0].main,
//                 current_humidity: res.data.list[0].main.humidity,
//                 current_wind: res.data.list[0].wind.speed,

//                 weather_day1: res.data.list[0].weather[0].main,
//                 temperature_day1: Math.round(res.data.list[0].main.temp),
//                 weather_icons_day1: res.data.list[0].weather[0].icon,

//                 weather_day2: res.data.list[1].weather[0].main,
//                 temperature_day2: Math.round(res.data.list[1].main.temp),
//                 weather_icons_day2: res.data.list[1].weather[0].icon,

//                 weather_day3: res.data.list[2].weather[0].main,
//                 temperature_day3: Math.round(res.data.list[2].main.temp),
//                 weather_icons_day3: res.data.list[2].weather[0].icon,

//                 weather_day4: res.data.list[3].weather[0].main,
//                 temperature_day4: Math.round(res.data.list[3].main.temp),
//                 weather_icons_day4: res.data.list[3].weather[0].icon,

//                 weather_day5: res.data.list[4].weather[0].main,
//                 temperature_day5: Math.round(res.data.list[4].main.temp),
//                 weather_icons_day5: res.data.list[4].weather[0].icon,

//                 date1: res.data.list[0].dt_txt,
//                 date2: res.data.list[8].dt_txt,
//                 date3: res.data.list[16].dt_txt,
//                 date4: res.data.list[24].dt_txt,
//                 date5: res.data.list[32].dt_txt,
//             })
//         })
// }

// render() {
// console.log("df");
// // this.fetchWeather();
// const { isLoading, city, current_teperature, current_weather, current_humidity, current_wind,
//     weather_day1, temperature_day1, weather_icons_day1, date1,
//     weather_day2, temperature_day2, weather_icons_day2, date2,
//     weather_day3, temperature_day3, weather_icons_day3, date3,
//     weather_day4, temperature_day4, weather_icons_day4, date4,
//     weather_day5, temperature_day5, weather_icons_day5, date5,
// } = this.state

// if (isLoading) return 'Loading...'
// return (
// <div className="Card">
{/* <CardUp city={city}/>
                <CardUpleft current_teperature={current_teperature} current_humidity={current_humidity}
                    current_weather={current_weather} current_wind={current_wind} />
                <CardDownleft city={city} />
                <CardDownright weather_day1={weather_day1} temperature_day1={temperature_day1} weather_icons_day1={weather_icons_day1} date1={date1}
                    weather_day2={weather_day2} temperature_day2={temperature_day2} weather_icons_day2={weather_icons_day2} date2={date2}
                    weather_day3={weather_day3} temperature_day3={temperature_day3} weather_icons_day3={weather_icons_day3} date3={date3}
                    weather_day4={weather_day4} temperature_day4={temperature_day4} weather_icons_day4={weather_icons_day4} date4={date4}
                    weather_day5={weather_day5} temperature_day5={temperature_day5} weather_icons_day5={weather_icons_day5} date5={date5} /> */}
// </div>
//         )
//     }
// }

// export default Card;

// class Card extends React.Component {
//     render() {
//         return (
//             <div>
//             </div>
//         )
//     }
// }
// export default Card;

