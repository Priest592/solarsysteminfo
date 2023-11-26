import React from 'react';
import SolarSystem from './components/SolarSystem.jsx';
import SideBar from './components/SideBar.jsx';
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