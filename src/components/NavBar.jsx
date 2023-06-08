import React from 'react';
import { NavLink } from "react-router-dom";

//randome comment to test branch
const NavBar = () => {
	const menuItem=[
		{path:"/", name:"Sun"},
		{path:"/planets", name:"Planets"}, 
		{path:"/moons", name:"Moons"},
		{path:"/misc", name:"Misc"}, 
		{path:"/settings", name:"Settings"}
	]
	return (
			<div className="nContainer">
				{
					menuItem.map((item, index)=>(
						<NavLink className="nItem" activeclassname="active" to={item.path} key={index}>
							{item.name}
						</NavLink>
					))
				}
			</div>
	)
}

export default NavBar