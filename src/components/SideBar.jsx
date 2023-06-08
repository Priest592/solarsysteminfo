import React from 'react';
import NavBar from './NavBar.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sun from './pages/Sun.jsx';
import Moons from './pages/Moons.jsx'
import Planets from './pages/Planets';
import Misc from './pages/Moons.jsx';
import Settings from './pages/Settings.jsx';

const SideBar = () => {
	return (
		<div className="sContainer">
			<BrowserRouter>
				<div id="NavBarP">
				<NavBar/>
				</div>
				<div id="sDisplayP">
					<Routes>
						<Route path="/" element={<Sun />}/>
						<Route path="/planets" element={<Planets />}/>
						<Route path="/moons" element={<Moons />}/>
						<Route path="/misc" element={<Misc />}/>
						<Route path="/settings" element={<Settings />}/>
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	)
}

export default SideBar