import React from 'react';
import SolarSystem from './components/SolarSystem';
import SideBar from './components/SideBar';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div id="SideBarP">
        <SideBar/>
      </div>
      <div id="SolarSystemP">
        <SolarSystem/>
      </div>
    </div>
  )
}

export default App