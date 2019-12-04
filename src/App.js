import React from 'react';
import './App.css';
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'
import { connect } from 'react-redux';
import LoadData from './redux/Action'
import SearchBar from './components/SearchBar/SearchBar'
class App extends React.Component {
  componentDidMount() {
    this.props.LoadData("Sydney");
  }

  render() {
    if (this.props.data.length === 0) {
      // console.log(this.props.data)
      return <div></div>
    }
    console.log((new Date(this.props.data.list[0].dt_txt).toString().substring(3,0)))
    const list =this.props.data.list;
    const mylist =[list[0],list[8],list[16],list[24],list[32]];

    return (
      <div>
        <NavBar />
        <SearchBar loadData = {this.props.LoadData}/>
        <Card city = {this.props.data.city.name} data = {mylist}/>
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
