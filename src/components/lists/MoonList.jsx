import React from 'react';
import Card from './Card';
import { moonDefaults } from './Defaults'

const MoonList = () => {
  return (
    <div>
      {
        moonDefaults.map((moon, i) => {
          return (
            <Card
              key={i}
              name={moonDefaults[i].name}
              velocity={moonDefaults[i].velocity}
              range={moonDefaults[i].range}
              radius={moonDefaults[i].radius}
              color={moonDefaults[i].color}
              description={moonDefaults[i].description}
            />
          )
        })
      }
    </div>
  )
}

export default MoonList;