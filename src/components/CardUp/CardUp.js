import React from "react";
import './CardUp.css'
import CardUpleft from './CardUpleft'

class CardUp extends React.Component{

  render(){
    const {city} = this.props.city
    return(
        <div className="cardup">
            <CardUpleft/>
            <h2>{city}</h2>
        </div>
    )
  }
}

// const CardUp = (props)=> {
//   // const city = props.city  
//     return(
//         <div className="cardup">
//             <CardUpleft/>
//             <h2>FRANCE</h2>
//         </div>
//   )
// };

export default CardUp;
