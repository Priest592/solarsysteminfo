import React from 'react';
import NavBar from './scomponents/NavBar';
import SDisplay from './scomponents/SDisplay';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './scomponents/pages/About.jsx';
import Modify from './scomponents/pages/Modify.jsx';
import Help from './scomponents/pages/Help.jsx';
import Settings from './scomponents/pages/Settings.jsx';

const SideBar = () => {
	return (
		<div>
			<div className="sContainer">
				<div id="NavBarP">
					<BrowserRouter>
						<NavBar>
							<Routes>
								<Route path="">
									<Route path="/about" element={<About />}/>
									<Route path="/modify" element={<Modify />}/>
									<Route path="/help" element={<Help />}/>
									<Route path="/settings" element={<Settings />}/>
								</Route>
								
							</Routes>
						</NavBar>
					</BrowserRouter>
				</div>
				<div id="sDisplayP">
					<SDisplay/>
				</div>
			</div>
		</div>
	)
}

export default SideBar