import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { useEffect, useState } from "react";
import Loading from "../components/loading.jsx";
import config from './../firebase/config.js';

export default function Home () {
  const baseURL = 'https://firebasestorage.googleapis.com/v0/b/porcelanosa-partners-spaces.appspot.com/o/projects%2FdorptVQTHsbkYC60NSlt%2Fscenes%2F1567170849457-base?alt=media&token=cf8bcee2-bf89-4fd9-8bfd-9d4462348844';
  
  //Connect and init firebase
  const firebaseApp = initializeApp(config);
  const db = getFirestore(firebaseApp);
  const [floor, setFloor] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [loading, setLoading] = useState(true);
  const [flag, setFlag] = useState(false);

  //Fetch data from firebase
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'materials'));
      querySnapshot.forEach((doc) => {
        setLoading(false)
        if (doc.id === 'mTrveExUlJpsEInPt1KX') {
          setFurniture(doc.data())
          // console.log("Furniture")
          // console.log(furniture)
          setFlag(true)
        } else {
          setFloor(doc.data())
          // console.log("Floor")
          // console.log(floor)
        }
        // console.log(doc.id + " => " + doc.data());
      });
      setLoading(false);
    };
    fetchData();
  }, [flag]);

  return (
    <>
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      ESTUDIO CACTUS VISUALIZER TEST
      <div className='flex flex-col items-center justify-center py-3 w-full md:w-7/12'>
        <img src={baseURL} alt='background' className="z-10" />
        { furniture.materials && furniture.materials.length > 0 ? 
          furniture.materials.map((material, index) => {
              return (
                  <img src={material.layer} alt='background' className="absolute w-full md:w-7/12 z-10" key={index}/>
              )
            }) : <Loading />
        }
        { floor.materials && floor.materials.length > 0 ? 
          floor.materials.map((material, index) => {
              return (
                  <img src={material.layer} alt='background' className="absolute w-full md:w-7/12 z-10" key={index}/>
              )
            }) : <Loading />
        }
      </div>
    </div>
    </>
  )
}
