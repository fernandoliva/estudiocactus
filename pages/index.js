import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import config from './../firebase/config.js'

import Backgrounds from '../components/backgrounds.jsx'
import Selectors from '../components/selectors.jsx'
// import Loading from '../components/loading.jsx'

export default function Home () {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844'

  // Connect and init firebase
  const firebaseApp = initializeApp(config)
  const db = getFirestore(firebaseApp)
  const [furniture, setFurniture] = useState([])
  const [floor, setFloor] = useState([])
  const [name, setName] = useState('furniture')
  const [flag, setFlag] = useState(false)
  // const [loading, setLoading] = useState(true)

  // const [points, setPoints] = useState([]);
  // Fetch points data from firebase
  // useEffect(() => {
  //   const fetchPoints = async () => {
  //   const querySnapshot = await getDocs(collection(db, 'points'));
  //   querySnapshot.forEach((doc) => {
  //     setPoints(points => [...points, doc.data()]);
  //     setLoading(false)
  //   });
  // }
  // fetchPoints();
  // }, []);

  // Fetch material data from firebase
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'materials'))
      querySnapshot.forEach((doc) => {
        if (doc.id === 'mTrveExUlJpsEInPt1KX') {
          setFurniture(doc.data())
          // setLoading(false)
          setFlag(true)
        } else {
          setFloor(doc.data())
          // setLoading(false)
        }
      })
    }
    fetchData()
  }, [flag])

  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        ESTUDIO CACTUS VISUALIZER TEST
        <div className='flex flex-col items-center justify-center py-3 w-full md:w-7/12'>
          <img src={baseURL} alt='background' className='z-10' />
          <form className='absolute top-0 w-full flex flex-col items-center justify-center'>
            <select
              className='w-full md:w-1/2' onChange={(e) => {
                if (e.target.value === 'furniture') {
                  setName('furniture')
                } else {
                  setName('floor')
                }
              }}
            >
              <option value='furniture'>Furniture</option>
              <option value='floor'>Floor</option>
            </select>
          </form>
          <Backgrounds furniture={furniture} floor={floor} />
          {name === 'furniture' ? <Selectors className='furnitureSelected' props={furniture} name={name} /> : <Selectors className='floorSelected' props={floor} name={name} />}
        </div>
      </div>
    </>
  )
}
