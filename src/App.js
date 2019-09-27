import React from 'react';
import './App.css';
// import CardUp from './components/Card_Up/Card_Up'
// import CardDownleft from './components/Card_Down_Left/Card_Down_Left'
// import CardDownright from './components/Card_Down_Right/Card_Down_Right'

// import ReactDOM from 'react-dom'
import  {FontAwesomeIcon}  from '@fortawesome/react-fontawesome';
import  {faBars} from '@fortawesome/free-solid-svg-icons';
import Card from './components/Card';

function App() {
  return (
    <div className="container">
      <header><FontAwesomeIcon icon={faBars}/></header>
      <div><Card/></div>
    
    </div>
  );
}
export default App;
