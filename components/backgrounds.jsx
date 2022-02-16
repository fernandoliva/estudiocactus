import React from 'react'

const Backgrounds = ({ furniture, floor }) => {
  return (
    <>
      {furniture.materials && furniture.materials.length > 0
        ? furniture.materials.map((material, index) => {
            return (
              <img src={material.layer} alt='background' className='absolute w-full md:w-7/12 z-0 furnitureBG' key={index} id={index} />
            )
          })
        : null}
      {floor.materials && floor.materials.length > 0
        ? floor.materials.map((material, index) => {
            return (
              <img src={material.layer} alt='background' className='absolute w-full md:w-7/12 z-0 floorBG' key={index} id={index} />
            )
          })
        : null}
    </>
  )
}

export default Backgrounds
