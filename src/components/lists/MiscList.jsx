import React from 'react';
import Card from './Card';
import { miscDefaults } from './Defaults'

const MiscList = () => {
  return (
    <div>
      {
        miscDefaults.map((misc, i) => {
          return (
            <Card
              key={i}
              name={miscDefaults[i].name}
              velocity={miscDefaults[i].count}
              innerrange={miscDefaults[i].innerrange}
              outerrange={miscDefaults[i].outerrange}
              radius={miscDefaults[i].radius}
              color={miscDefaults[i].color}
              description={miscDefaults[i].description}
            />
          )
        })
      }
    </div>
  )
}

export default MiscList;