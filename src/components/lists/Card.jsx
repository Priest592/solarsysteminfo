import React, { useState } from 'react'

const Card = ({name, radius, range, description}) => {

  // const [size, setSize] = useState(0)
  // const [brightness, setBrightness] = useState(0)

  // const changeSize = (e) => {
  //   setSize(e.target.value)
  // }
  // const changeBrightness = (e) => {
  //   setBrightness(e.target.value)
  // }

  return (
    <div className="card">
      <div>
        <h1 margin="0">{name}</h1>
        <p>{description}</p>
        <p>Radius: {radius} 
          {/* <input className="slider" type="range" min="0" max="100" value={size} onChange={changeSize}/> */}
        </p>
        <p>Range: {range} 
          {/* <input className="slider" type="range" min="0" max="100" value={brightness} onChange={changeBrightness}/> */}
        </p>
      </div>
		</div>
  ) 
}

export default Card