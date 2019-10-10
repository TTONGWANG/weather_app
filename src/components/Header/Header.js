import React from "react";
import './Header.css'
// import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
// import  {faBars} from '@fortawesome/free-solid-svg-icons';
// <header><FontAwesomeIcon icon={faBars}/></header>
import Card from './../Card' 
import Dropdown from 'react-bootstrap/Dropdown'


class Header extends React.Component{
    constructor(){
        super(); 
        this.state = {
           city:"Paris"
        }
        this.firstbutton = this.firstbutton.bind(this)
        this.secondbutton = this.secondbutton.bind(this)
        this.thirdbutton = this.thirdbutton.bind(this)
    }
    
    firstbutton(){
        this.setState({
            city: "Paris"
        })
    }

    secondbutton(){
        this.setState({
            city:"Sydney"
        })
    }

    thirdbutton(){
        this.setState({
            city:"Beijing"
        })
    }

    render(){
            const {city} = this.state
        return(
            <div>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">City</Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item button onClick = {this.firstbutton}>Paris</Dropdown.Item>
                    <Dropdown.Item button onClick = {this.secondbutton}>Sydney</Dropdown.Item>
                    <Dropdown.Item  button onClick = {this.thirdbutton}>Beijing</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Card city = {city}/>
            </div>
        )
    }
}

export default Header;
