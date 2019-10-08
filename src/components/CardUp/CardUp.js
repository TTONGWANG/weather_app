import React from "react";
import './CardUp.css'
import Paris from './image/Paris.jpeg'
import Sydney from './image/Sydney.jpeg'
import Beijing from './image/Beijing.jpeg'

class CardUp extends React.Component{
    styles = {
        background: `url(${Paris})`
    }

    // chooseCity() {
    //     this.props.city == 'Paris' ? this.styles.background = `url(${Paris})` 
    //     : this.props.city == 'Sydney' ? this.styles.background = `url(${Sydney})` 
    //     : this.styles.background = `url(${Beijing})`;
    // }

render(){
    // this.chooseCity();
    return(
        <div style = {this.styles} className="cardup" >
        <h2>{this.props.city}</h2>
        </div>
    )};
}

export default CardUp;
