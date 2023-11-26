import React from 'react';
import Editor from './Editor';
import { sunDefaults } from './Defaults'

const SunList = () => {
  return (
    <div>
      {
        sunDefaults.map((sun, i) => {
          return (
            <Editor
              key={i}
              name={sunDefaults[i].name}
              velocity={sunDefaults[i].radius}
              range={sunDefaults[i].color}
              radius={sunDefaults[i].glow}
              color={sunDefaults[i].glowColor}
              description={sunDefaults[i].description}
            />
          )
        })
      }
    </div>
  )
}

export default SunList;