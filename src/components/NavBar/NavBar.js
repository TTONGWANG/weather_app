import React from 'react';
import './NavBar.css';

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
            // marginLeft: "450px"
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
            <div className="body">
                <h1>{new Date().toString().substring(16, 0)}</h1>
                <div className="sidemenu" style={{width:this.state.width ,marginLeft:this.state.marginLeft}}>
                    <div className="close" onClick={this.closeSM}>&times;</div>
                    <div className="sm-wrapper">
                        <a href="App.js" >HOME</a>
                        <a href="#">Sign In</a>
                        <a href="#">Login</a>
                    </div>
                </div>
                <div id="pg-content" style={{width:this.state.width ,marginLeft:this.state.marginLeft}} >
                    <div className="barstyle"  onClick={this.openSM}>&#9776;</div>        
                </div>
            </div>
        );
    }
}

export default NavBar;