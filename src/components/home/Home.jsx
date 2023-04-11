import React,{useState,useEffect} from 'react'
import Splash from '../splash/Splash';

const Home = () => {

  const [loading,setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },8000)
  }, []);

  return (
    <>
        {loading ? <Splash /> : (
            <>
                <h1>Welcome Home</h1>
            </>
        )}
    </>
  )
}

export default Home
