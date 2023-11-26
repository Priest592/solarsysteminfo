import React from 'react';
import Card from './Card';
import { planetDefaults } from './Defaults'

const PlanetList = () => {
  return (
    <div>
      {
        planetDefaults.map((planet, i) => {
          return (
            <Card
              key={i}
              name={planetDefaults[i].name}
              velocity={planetDefaults[i].velocity}
              range={planetDefaults[i].range}
              radius={planetDefaults[i].radius}
              color={planetDefaults[i].color}
              description={planetDefaults[i].description}
            />
          )
        })
      }
    </div>
  )
}

export default PlanetList;