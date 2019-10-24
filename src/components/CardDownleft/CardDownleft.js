import React from "react";
import './CardDownleft.css'
// import Arrows from './Arrows/Arrows'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faCaretRight}  from '@fortawesome/free-solid-svg-icons';

class CardDownleft extends React.Component{
    constructor(){
        super();
        this.greeting = this.greeting.bind(this)
    }

    greeting(){
       alert(`Don't forget your sunscreen tomorrow!`)
    }

    render(){
        return(
            <div className="carddownleft">
            <h1>Twitter Feed <small>#{this.props.city}</small></h1>
            <p>Don't forget your sunscreen tomorrow!<br/>
               <br/>
               Amazing weather Today!</p>
            {/* <p>{this.greeting}</p> */}
            <h3>NEXT</h3>   
            {/*    */}
            {/* <Arrows/> */}
            <div className="arrows">
                <button onClick = {this.greeting}><FontAwesomeIcon icon={faCaretRight} /></button>
            </div>
    </div>
        )
    }
}

export default CardDownleft;