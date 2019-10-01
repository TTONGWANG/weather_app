import React, {Component} from 'react'
import './SignUpForm.css';

class SignUpForm extends Component{
    constructor(){
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.changeUsername = this.changeUsername.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    changeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    changePassword(e){
        this.setState({
            password: e.target.value
        })
    }   

    changeInput(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            username: '',
            password: ''
        })
    }

    render(){
        const {username,password} = this.state
        return(
            <div>
                <form>
                    <div>
                        <label htmlFor = "username">Unsername:</label>
                        <input type="text" name="username" value = {username} onChange={this.changeInput} placeholder = ' Input your name'/>
                    </div>
                    <div>
                        <label htmlFor = "password">Password:</label>
                        <input type="text" name="password" value = {password} onChange={this.changeInput} placeholder = ' Input your password'/>
                    </div>
                    <div className = "button">
                    <button variant="contained" onClick = {this.handleSubmit}>submit</button></div>
                </form>
            </div>
        )
    }
}

export default SignUpForm;