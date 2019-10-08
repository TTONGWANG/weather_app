import React from "react";
import './Header.css'
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
// import  {faBars} from '@fortawesome/free-solid-svg-icons';
import Card from './../Card'


// <header><FontAwesomeIcon icon={faBars}/></header> 

class Header extends React.Component{
    constructor(){
        super(); 
        this.state = {
           i : 1
        }
        this.first = this.first.bind(this)
        this.second = this.second.bind(this)
        this.third = this.third.bind(this)
    }
    
    first(){
        this.setState({
            i: 1
        })
        // alert(`${this.i}`)
    }
    second(){
        this.setState({
            i: 2
        })
        // alert(`${this.i}`)
    }
    third(){
        this.setState({
            i: 3
        })
        // alert(`${this.i}`)
    }

    render(){
            const {i} = this.state
        return(
            <div>
            <div className = "buildbutton">
                <button onClick = {this.first}>Paris</button>
                <button onClick = {this.second}>Sydney</button>
                <button onClick = {this.third}>Beijing</button>
            </div>
            <Card i = {i}/>
            </div>

       
        )
    }
}

export default Header;
