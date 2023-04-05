import React from 'react'
//randome comment to test branch
const NavBar = () => {
	const menuItem=[{path:"/", name:"About"}, {path:"/", name:"Modify"}, {path:"/", name:"Help"}, {path:"/", name:"Settings"}]
	return (
			<div className="nContainer">
				{
					menuItem.map((item, index)=>(
						<div className="nItem" to={item.path} key={index}>
							{item.name}
						</div>
					))
				}
			</div>
	)
}

export default NavBar