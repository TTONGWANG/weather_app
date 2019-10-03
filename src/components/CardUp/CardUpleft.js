import React from "react";
import './CardUpleft.css'
import axios from 'axios'
import CardUp from './CardUp'

class CardUpleft extends React.Component{
    constructor(){
        super();
        this.state = {
            isLoading: false,
            city:'',
            teperature:'',
            weather:'',
            humidity:'',
            wind:''
        }
        this.api = "https://api.apixu.com/v1/current.json?key=1eb8b1de06614af3a3423418171609&q=Paris"
    }

    componentDidMount(){
        this.setState({
            isLoading:true
        })
        axios.get(this.api)
        .then(res=>{console.log(res.data);
        const {current:{condition:{text}, temp_c, humidity, wind_kph},location:{name}} = res.data;
        this.setState({
            isLoading: false,
            weather: text,
            teperature: temp_c,
            humidity: humidity,
            wind: wind_kph,
            city:name
        })
        })
    }

    render(){
        const {isLoading, teperature, weather, humidity, wind,city} = this.state
        if(isLoading) return 'Loading...'
        return(
            <div>
                <CardUp city = {city}/>
                <div className="cardupleft">
                    <h1>{teperature}°</h1>
                    <p>{weather}</p>
                    <ul>
                        <li>
                        <p>humidity</p>
                        <p>{humidity}</p>
                        </li>
                        <li>
                        <p>wind</p>
                        <p>{wind}k/m</p>
                        </li>
                    </ul>
                </div>
            </div>

        )
    }
}

// const CardUpleft = (props)=> {
//     return(
//         <div className="cardupleft">
//         <h1>12°</h1>
//         <p>CLOUDY</p>
//         <ul>
//             <li>
//             <p>humidity</p>
//             <p>64%</p>
//             </li>
//             <li>
//             <p>wind</p>
//             <p>12 k/m</p>
//             </li>
//         </ul>
//     </div>
//     )
// };


export default CardUpleft;