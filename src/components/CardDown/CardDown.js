import React from "react";
import './CardDown.scss'

class CardDownright extends React.Component {

    render() {
        console.log(this.props.data)
        const Li = ({ weather, main, date }) => (
            <li>
                <h1>{new Date(date).toString().substring(3, 0)}</h1>
                {/* change date to weekday */}
                <img src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt="weather_img"></img>
                <p>{Math.round(main.temp)}°</p>
                <p>{weather.main}</p>
            </li>
        )
        // console.log(this.props)
        return (
            <div className="carddownright">
                <ul>
                    {
                        this.props.data.map(
                            (list) => <Li weather={list.weather[0]} main={list.main} date={list.dt_txt}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default CardDownright;