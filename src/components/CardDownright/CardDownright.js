import React from "react";
import './CardDownright.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCloudRain,
         faSun,
         faCloud,
         faPooStorm,
         } from '@fortawesome/free-solid-svg-icons';

const CardDownright = (props)=> {
    return(
    <div className="carddownright">
          <ul>
            <li>
              <h1>MON</h1>
              <h2><FontAwesomeIcon icon={faCloudRain}/></h2>
              <p>9°</p>
              <p>raining</p>
            </li>
            <li>
              <h1>TUE</h1>
              <h2><FontAwesomeIcon icon={faSun}/></h2>
              <p>15°</p>
              <p>sunning</p>
            </li>
            <li>
              <h1>WED</h1>
              <h2><FontAwesomeIcon icon={faCloud}/></h2>
              <p>7°</p>
              <p>Cloudy</p>
            </li>
            <li>
              <h1>THU</h1>
              <h2><FontAwesomeIcon icon={faPooStorm}/></h2>
              <p>7°</p>
              <p>Storm</p>
            </li>
            <li>
              <h1>FRI</h1>
              <h2><FontAwesomeIcon icon={faSun}/></h2>
              <p>18°</p>
              <p>Sunny</p>
            </li>            
          </ul>
        </div>
    )
};

export default CardDownright;