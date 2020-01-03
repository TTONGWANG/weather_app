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
            city_change: '',
            api : '',
            suggestions:[]
        };

    }
    componentDidMount(){
        this.props.loadData(this.state.city);
    }
 
    handleChange = (event) => {
         console.log(event.target.value);
         const {items} = this.props
        let suggestions = [];
        if(event.target.value.length > 0){
            const regex = new RegExp(`^${event.target.value }`, 'i');  //^match the brginning of the match,'i' ignore case
            suggestions = items.sort().filter(v=>regex.test(v))  //Tests for a match in its string parameter.
        }
        this.setState({ city: event.target.value});
        this.setState({suggestions})
    }

    renderSuggestions=()=>{
        const { suggestions} = this.state;
        if(suggestions.length === 0){
            return null;
        }
        return(
            <ul>
                {suggestions.map((item) => <li>{item}</li>)}
            </ul>)
        
    }

    handleSubmit = (event) => {
        // this.setState({ city: this.state.value });
        // this.fetchWeather(this.state.city);
        // this.props.loadData(this.state.city);
        this.setState({
            city_change: this.state.city,
        })
        event.preventDefault();
        this.props.loadData(this.state.city);
        // console.log(this.state.city)
    
    }
    
    render() {
        
        return (
                <div className = "autotext">
                    {/* <label> */}
                    <input type="text" value={this.state.city} onChange={this.handleChange} onKeyDown = {this.renderSuggestions} placeholder="City name" />
                    {/* </label> */}
                    {this.renderSuggestions()}
                    <button onClick={this.handleSubmit} ><FontAwesomeIcon icon={faSearch} /> </button>
                </div>
        );
    }
}

export default SearchBar;