import React from 'react'

// Change zindex backgrounds
const changeZindex = (e) => {
  const idThumbnail = e.target.className.split('-')[4]
  if (e.target.className.includes('furniture')) {
    const background = document.getElementsByClassName('furnitureBG')
    for (const i of background) {
      if (i.id === idThumbnail) {
        i.classList.add('z-20')
        i.classList.remove('z-0')
      } else {
        i.classList.add('z-0')
        i.classList.remove('z-20')
      }
    }
  } else if (e.target.className.includes('floor')) {
    const background = document.getElementsByClassName('floorBG')
    for (const i of background) {
      if (i.id === idThumbnail) {
        i.classList.add('z-20')
        i.classList.remove('z-0')
      } else {
        i.classList.add('z-0')
        i.classList.remove('z-20')
      }
    }
  }
}

const Selectors = ({ props, name }) => {
  return (
    <>
      <div className='absolute md:inset-y-auto md:left-0 bottom-0 flex flex-row flex-wrap justify-center w-full md:w-7/12 max-h-36 md:max-h-full overflow-scroll md:overflow-auto'>
        <div className='flex flex-col justify-center'>
          {props.materials &&
            props.materials.length > 0
            ? props.materials.map((material, index) => {
                return (
                  <div key={index} className='flex flex-row flex-wrap md:flex-nowrap items-center justify-center content-center py-3 px-2 my-2 md:w-10/12 z-50 bg-gray-100/50 rounded'>
                    <p className='text-sm text-gray-800 pr-5'>
                      {material.name}
                    </p>
                    <img
                      src={material.thumbnail}
                      alt='background'
                      className={`relative rounded md:w-16 w-10 z-0 ${name}-${index}`}
                      onClick={changeZindex}
                    />
                  </div>
                )
              })
            : null}
        </div>
      </div>
    </>
  )
}

export default Selectors
