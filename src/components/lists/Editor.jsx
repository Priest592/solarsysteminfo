import React, { useState } from 'react'

const Editor = ({name, radius, range, description}) => {

  return (
    <div className="editor">
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

export default Editor