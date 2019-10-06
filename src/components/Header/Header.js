import React from "react";
import './Header.css'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faBars} from '@fortawesome/free-solid-svg-icons';

{/* <header><FontAwesomeIcon icon={faBars}/></header> */}

class Header extends React.Component{
    constructor(){
        super(); 
        this.state = {
           i : ''
        }
        this.first = this.first.bind(this)
        this.second = this.second.bind(this)
        this.third = this.third.bind(this)
    }
    first(){
        this.i = '1';
        alert(`${this.i}`)
    }
    second(){
        this.i = '2';
        alert(`${this.i}`)
    }
    third(){
        this.i = '3';
        alert(`${this.i}`)
    }

    // componentDidMount() { 
        
    //     this.props.greeting(this.i)
    //   }


    render(){
            // const {i} = this.state
        return(
            <div className = "buildbutton">
                <button onClick = {this.first}>Paris</button>
                <button onClick = {this.second}>Sydney</button>
                <button onClick = {this.third}>Beijing</button>
            </div>

       
        )
    }
}

export default Header;
