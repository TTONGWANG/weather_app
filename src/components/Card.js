import React from "react";
import './Card.css'
import CardUp from './CardUp/CardUp'
import CardUpleft from './CardUp/CardUpleft/CardUpleft'
import CardDownleft from './CardDownleft/CardDownleft'
import CardDownright from './CardDownright/CardDownright'
import axios from 'axios'
class Card  extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading:false,
            city:'',
            current_teperature:'',
            current_weather:'',
            current_humidity:'',
            current_wind:'',
            weather_day1:'',
            temperature_day1:'',
            weather_icons_day1:'',
            weather_day2:'',
            temperature_day2:'',
            weather_icons_day2:'',
            weather_day3:'',
            temperature_day3:'',
            weather_icons_day3:'',
            weather_day4:'',
            temperature_day4:'',
            weather_icons_day4:'',
            weather_day5:'',
            temperature_day5:'',
            weather_icons_day5:'',
            date1:'',
            date2:'',
            date3:'',
            date4:'',
            date5:'',     
        }
    }

    componentDidMount(){
        this.setState({
          isLoading:true,
        })
        axios.get(this.api)
        .then(res=>{console.log(res.data);
        this.setState({
            isLoading: false,
            city: res.data.location.name,
            current_teperature: res.data.current.temp_c,
            current_weather: res.data.current.condition.text,
            current_humidity: res.data.current.humidity,
            current_wind: res.data.current.wind_kph,
            weather_day1: res.data.forecast.forecastday[0].day.condition.text,
            temperature_day1: res.data.forecast.forecastday[0].day.avgtemp_c,
            weather_icons_day1: res.data.forecast.forecastday[0].day.condition.icon,
            weather_day2: res.data.forecast.forecastday[1].day.condition.text,
            temperature_day2: res.data.forecast.forecastday[1].day.avgtemp_c,
            weather_icons_day2: res.data.forecast.forecastday[1].day.condition.icon,
            weather_day3: res.data.forecast.forecastday[2].day.condition.text,
            temperature_day3: res.data.forecast.forecastday[2].day.avgtemp_c,
            weather_icons_day3: res.data.forecast.forecastday[2].day.condition.icon,
            weather_day4: res.data.forecast.forecastday[3].day.condition.text,
            temperature_day4: res.data.forecast.forecastday[3].day.avgtemp_c,
            weather_icons_day4: res.data.forecast.forecastday[3].day.condition.icon,
            weather_day5: res.data.forecast.forecastday[4].day.condition.text,
            temperature_day5: res.data.forecast.forecastday[4].day.avgtemp_c,
            weather_icons_day5: res.data.forecast.forecastday[4].day.condition.icon,
            date1: res.data.forecast.forecastday[0].date,
            date2: res.data.forecast.forecastday[1].date,
            date3: res.data.forecast.forecastday[2].date,
            date4: res.data.forecast.forecastday[3].date,
            date5: res.data.forecast.forecastday[4].date,
            })
        })
    }
    render(){
        
            const{isLoading, city, current_teperature, current_weather, current_humidity,current_wind,
                  weather_day1,temperature_day1,weather_icons_day1,date1,
                  weather_day2,temperature_day2,weather_icons_day2,date2,
                  weather_day3,temperature_day3,weather_icons_day3,date3,
                  weather_day4,temperature_day4,weather_icons_day4,date4,
                  weather_day5,temperature_day5,weather_icons_day5,date5,
                } = this.state
            if(isLoading) return 'Loading...'

            console.log("props",this.props)
            // this.chooseApi()
            
            if (this.props.i === 1){
                this.api = "https://api.apixu.com/v1/forecast.json?forecast_days=3&key=1eb8b1de06614af3a3423418171609&q=Paris&days=5"
            }
            else if (this.props.i === 2){
                this.api = "https://api.apixu.com/v1/forecast.json?forecast_days=3&key=1eb8b1de06614af3a3423418171609&q=Sydney&days=5"
            }
            else{
                this.api = "https://api.apixu.com/v1/forecast.json?forecast_days=3&key=1eb8b1de06614af3a3423418171609&q=Beijing&days=5"
            }

            return(
    
                <div className="Card">
                    {/* <Header city = {city}/> */}
                    {/* <Header greeting={i => this.greeting(i)}/> */}
                    <CardUp city = {city}/>
                    <CardUpleft current_teperature = {current_teperature} current_humidity = {current_humidity} 
                                current_weather = {current_weather} current_wind = {current_wind} /> 
                    <CardDownleft city = {city}/>
                    <CardDownright weather_day1 = {weather_day1} temperature_day1 = {temperature_day1} weather_icons_day1 = {weather_icons_day1} date1 = {date1}
                                   weather_day2 = {weather_day2} temperature_day2 = {temperature_day2} weather_icons_day2 = {weather_icons_day2} date2 = {date2}
                                   weather_day3 = {weather_day3} temperature_day3 = {temperature_day3} weather_icons_day3 = {weather_icons_day3} date3 = {date3}
                                   weather_day4 = {weather_day4} temperature_day4 = {temperature_day4} weather_icons_day4 = {weather_icons_day4} date4 = {date4}
                                   weather_day5 = {weather_day5} temperature_day5 = {temperature_day5} weather_icons_day5 = {weather_icons_day5} date5 = {date5}/>
                </div>
            )
    }
}

export default Card;

