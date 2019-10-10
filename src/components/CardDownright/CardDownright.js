import React from "react";
import './CardDownright.css'

class CardDownright extends React.Component{

    render(){    
        return(
            <div className="carddownright">
                <ul>
                    <li>
                    <h1>{new Date(this.props.date1).toString().substring(3,0)}</h1>
                        <img src = {this.props.weather_icons_day1} alt ="sunny"></img>
                        <p>{this.props.temperature_day1}°</p>
                        <p>{this.props.weather_day1}</p>
                    </li>
                    <li>
                    <h1>{new Date(this.props.date2).toString().substring(3,0)}</h1>
                        <img src = {this.props.weather_icons_day2} alt ="sunny"></img>
                        <p>{this.props.temperature_day2}°</p>
                        <p>{this.props.weather_day2}</p>
                    </li>
                    <li>
                    <h1>{new Date(this.props.date3).toString().substring(3,0)}</h1>
                        <img src = {this.props.weather_icons_day3} alt ="sunny"></img>
                        <p>{this.props.temperature_day3}°</p>
                        <p>{this.props.weather_day3}</p>
                    </li>
                   <li>
                   <h1>{new Date(this.props.date4).toString().substring(3,0)}</h1>
                      <img src = {this.props.weather_icons_day4} alt ="sunny"></img>
                      <p>{this.props.temperature_day4}°</p>
                      <p>{this.props.weather_day4}</p>
                   </li>
                   <li>
                   <h1>{new Date(this.props.date5).toString().substring(3,0)}</h1>
                      <img src = {this.props.weather_icons_day5} alt ="sunny"></img>
                      <p>{this.props.temperature_day5}°</p>
                      <p>{this.props.weather_day5}</p>
                  </li>            
                </ul>
            </div>
      )
  }
}

// const CardDownright = (props)=> {
//     return(
//     <div className="carddownright">
//           <ul>
//             <li>
//               <h1>MON</h1>
//               <h2><FontAwesomeIcon icon={faCloudRain}/></h2>
//               <p>9°</p>
//               <p>raining</p>
//             </li>
//             <li>
//               <h1>TUE</h1>
//               <h2><FontAwesomeIcon icon={faSun}/></h2>
//               <p>15°</p>
//               <p>sunning</p>
//             </li>
//             <li>
//               <h1>WED</h1>
//               <h2><FontAwesomeIcon icon={faCloud}/></h2>
//               <p>7°</p>
//               <p>Cloudy</p>
//             </li>
//             <li>
//               <h1>THU</h1>
//               <h2><FontAwesomeIcon icon={faPooStorm}/></h2>
//               <p>7°</p>
//               <p>Storm</p>
//             </li>
//             <li>
//               <h1>FRI</h1>
//               <h2><FontAwesomeIcon icon={faSun}/></h2>
//               <p>18°</p>
//               <p>Sunny</p>
//             </li>            
//           </ul>
//         </div>
//     )
// };

export default CardDownright;