import React from 'react';
import './App.css';
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux';
import loadData from './redux/Action'
import SearchBar from './components/SearchBar/SearchBar'

class App extends React.Component {
  // if(props.data===[]){ loadData()};
  // console.log(props)
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    if (this.props.data.length === 0) {
      console.log(this.props.data)
      return <div></div>
    }
    // console.log(this.props.data.city.name)
    return (
      <div>
        <NavBar />
        
          <SearchBar city={this.props.data.city.name}/>
          <Card city={this.props.data.city.name} current_teperature={Math.round(this.props.data.list[0].main.temp)}
            current_weather={this.props.data.list[0].main.humidity} current_humidity={this.props.data.list[0].main.humidity}
            current_wind={this.props.data.list[0].wind.speed}

            weather_day1={this.props.data.list[0].weather[0].main} temperature_day1={Math.round(this.props.data.list[0].main.temp)}
            weather_icons_day1={this.props.data.list[0].weather[0].icon}

            weather_day2={this.props.data.list[1].weather[0].main} temperature_day2={Math.round(this.props.data.list[1].main.temp)}
            weather_icons_day2={this.props.data.list[1].weather[0].icon}

            weather_day3={this.props.data.list[2].weather[0].main} temperature_day3={Math.round(this.props.data.list[2].main.temp)}
            weather_icons_day3={this.props.data.list[2].weather[0].icon}

            weather_day4={this.props.data.list[3].weather[0].main} temperature_day4={Math.round(this.props.data.list[3].main.temp)}
            weather_icons_day4={this.props.data.list[3].weather[0].icon}

            weather_day5={this.props.data.list[4].weather[0].main} temperature_day5={Math.round(this.props.data.list[4].main.temp)}
            weather_icons_day5={this.props.data.list[4].weather[0].icon}
            data1={this.props.data.list[0].dt_txt}
            data2={this.props.data.list[1].dt_txt}
            data3={this.props.data.list[2].dt_txt}
            data4={this.props.data.list[3].dt_txt}
            data5={this.props.data.list[4].dt_txt} />
      </div>
    )
  }
}

function mapStatesToProps(state) {
  console.log(state)
  return {
    // weatherdata: getData(),
    data: state.Data

  }
}

// const mapDispatchToProps = dispatch =>{
//   return{
//     loadData: ()=>dispatch(loadData())
//   }
// }

export default connect(mapStatesToProps, { loadData })(App);
