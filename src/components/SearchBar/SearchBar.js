import React from "react";
import './SearchBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            city: '',
            city_change: 'Sydney',

        };
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        this.setState({ city: event.target.value });
    }

    handleSubmit = (event) => {
        // this.setState({ city: this.state.value });
        this.fetchWeather(this.state.city);
        // console.log(this.state.city);
        this.setState({
            city_change: this.state.city
        })
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <label>
                        <input type="text" value={this.state.city} onChange={this.handleChange} placeholder="City name" />
                    </label>
                    <button onClick={this.handleSubmit} ><FontAwesomeIcon icon={faSearch} /> </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;