import React from 'react';
import './App.css';
import Card from './components/Card/Card'
// import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux';
import LoadData from './redux/Action'
import SearchBar from './components/SearchBar/SearchBar'
import Cities from './components/cities/Cities'
import BackgroundAnimation from './components/BackgroundAnimation/BackgroundAnimation'
class App extends React.Component {
  componentDidMount() {
    this.props.LoadData("Sydney");
  }

  render() {
    // console.log(this.props)
    if (this.props.data.length === 0) {
      return <div>
        loading...
      </div>
    }
    const list =this.props.data.list;
    const mylist =[list[0],list[8],list[16],list[24],list[32]];
    return (
      <div className = "construction">
        <SearchBar loadData = {this.props.LoadData} items = {Cities}/>
        <Card city = {this.props.data.city.name} data = {mylist}/>
        <BackgroundAnimation/>
      </div>
    )
  }
  
}

function mapStatesToProps(state) {
  return {
    data: state.Data
  }
}

export default connect(mapStatesToProps, { LoadData })(App);
