import React from 'react';
import './App.css';
import Card from './components/Card/Card'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Card />
      </div>
    </div>
  )
}
export default App;
