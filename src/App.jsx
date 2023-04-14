import { useState,useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"



import "./App.scss"


function App() {
  const [loading,setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
      const userToken = JSON.parse(localStorage.getItem('token'));
      if (!userToken || userToken === 'undefined') {
          setIsLoggedIn(false);
      }
      setIsLoggedIn(true);
  }

  useEffect(() => {
      checkUserToken();
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },8000)
  }, [isLoggedIn]);


  return (
    <>
      {isLoggedIn && <Navbar />}
      <div className='app__container'>
          <Outlet />
      </div>


    </>

  )
}

export default App
