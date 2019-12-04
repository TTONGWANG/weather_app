import React from 'react';
import './NavBar.scss';

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state={
            width : "",
            marginLeft : ""
        }
        this.openSM = this.openSM.bind(this);
        this.closeSM = this.closeSM.bind(this);
    }

    openSM(){
        this.setState({
            width : "300px",
        })
    }

    closeSM(){
        this.setState({
            width : "0px",
            marginLeft: "0px"
        })       
    }

    render() {
        return (
            <div className="nav">
                {/* <h1>{new Date().toString().substring(16, 0)}</h1> */}
                <div className="nav__menu" style={{width:this.state.width ,marginLeft:this.state.marginLeft}}>
                    <div className="nav__menu__close" onClick={this.closeSM}>&times;</div>
                    <div className="nav__menu__wrapper">
                        <a href="App.js" >HOME</a>
                        {/* <a href="#">Sign In</a> */}
                        {/* <a href="#">Login</a> */}
                    </div>
                </div>
                <div className="nav__content" style={{width:this.state.width ,marginLeft:this.state.marginLeft}} >
                    <div className="nav__content__barstyle"  onClick={this.openSM}>&#9776;</div>        
                </div>
            </div>
        );
    }
}

export default NavBar;