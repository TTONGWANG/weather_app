import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './SearchBar.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            city: '',
            ul_display:true,
            suggestions:[]
        };

    }
    handleChange = (event) => {
        const {items} = this.props
        let suggestions = [];
        if(event.target.value.length > 0){
            const regex = new RegExp(`^${event.target.value }`, 'i');  //^match the beginning of the match,'i' ignore case
            // console.log(regex)
            suggestions = items.sort().filter(v=>regex.test(v))  //Tests for a match in its string parameter. 给定字符串是否符合，符合的组成数组
            // console.log(suggestions)
        }
        this.setState({ 
            city: event.target.value,
            suggestions,
            ul_display: true
        });
    }

    getListValue = (event) =>{
        // console.log(event.target.innerText)
        this.setState({
            city:event.target.innerText,
            ul_display: false
        })
    }

    renderSuggestions=()=>{
        const { suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul className = {this.state.ul_display?'show':'disappear'}>
                {suggestions.map((item) => <li onClick = {this.getListValue}>{item}</li>)}
            </ul>)
    }

    handleSubmit = (event) => {
        // this.setState({ city: this.state.value });
        // this.fetchWeather(this.state.city);
        // this.props.loadData(this.state.city);
        this.setState({
            city: this.state.city,
            
        })
        event.preventDefault();
        this.props.loadData(this.state.city);
        // console.log(this.state.city)
    
    }
    
    render() {
        
        return (
                <div className = "autotext">
                    <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City name" />
                    {this.renderSuggestions()}
                    <button onClick={this.handleSubmit} ><FontAwesomeIcon icon={faSearch} /> </button>
                </div>
        );
    }
}

export default SearchBar;