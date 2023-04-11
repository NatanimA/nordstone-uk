import React, { useState,useEffect } from 'react'
import { FaGooglePlusG,FaLinkedinIn,FaFacebookF} from 'react-icons/fa'
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword } from "firebase/auth"

import { useNavigate } from 'react-router-dom'
import { auth } from '../../constants/firebase-config'
import Splash from '../splash/Splash'
import './Auth.scss'



const Auth = () => {
  const [slider,setSlider] = useState(true);
  const [userRegister,setUserRegister] = useState({name:'',email:'',password:''});
  const [userLogin,setUserLogin] = useState({email:'',password:''});
  const [user,setUser] = useState({})
  const [error,setError] = useState(null)
  const navigate = useNavigate()

//   onAuthStateChanged(auth,(currentUser) => {
//     setUser(currentUser)
//     localStorage.setItem('token',JSON.stringify(user.accessToken))
//   })

  const [loading,setLoading] = useState(false)
  useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      },8000)
  }, []);



  const handleRegisterInput = (e) => {
    setUserRegister(
            {...userLogin,
            [e.target.name]: e.target.value}
        )
  }

  const handleLoginInput = (e) => {
    setUserLogin(
            {...userLogin,
            [e.target.name]: e.target.value}
        )
  }

  const handleUserRegistration = async (e) => {
    e.preventDefault()
    const { email,password,name} = userRegister;
    try{
        const user = await createUserWithEmailAndPassword(auth,email,password);
        console.log(user)
    }catch(err){
        console.log(err)
    }
  }

  const handleUserAuthentication = async (e) => {
    e.preventDefault()
    const { email,password} = userLogin;
    try{
        const {user} = await signInWithEmailAndPassword(auth,email,password)
        localStorage.setItem('token',JSON.stringify(user.accessToken))
        navigate("/")
    }catch(error) {
        console.log("Error: ",error)
        setError(error)
    }
  }

  const handleOverLay =() => {
    setSlider(!slider)
  }



  return (
    <>
        {loading ? (<Splash />) : (
            <>
                <h2>Welcome to Nordstone UK</h2>
                <div className={slider ? "container" : "container right-panel-active"} id="container">
                    <div className="form-container sign-up-container">
                        <form onSubmit={handleUserRegistration}>
                            <h1>Create Account</h1>
                            <div className="social-container">
                                <a>
                                    <FaFacebookF />
                                </a>
                                <a>
                                    <FaGooglePlusG />
                                </a>
                                <a>
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <span>or use your email for registration</span>
                            <input onChange={handleRegisterInput} name='name' type="text" placeholder="Name" required/>
                            <input onChange={handleRegisterInput} name='email' type="email" placeholder="Email" required/>
                            <input onChange={handleRegisterInput} name='password' type="password" placeholder="Password" required/>
                            <button type='submit'>Sign Up</button>
                        </form>
                    </div>
                    <div className="form-container sign-in-container">
                        <form onSubmit={handleUserAuthentication}>
                            <h1>Sign in</h1>
                            <div className="social-container">
                                <a>
                                    <FaFacebookF />
                                </a>
                                <a>
                                    <FaGooglePlusG />
                                </a>
                                <a>
                                    <FaLinkedinIn />
                                </a>
                            </div>
                            <span>or use your account</span>
                            <input onChange={handleLoginInput} name='email'  type="email" placeholder="Email" required/>
                            <input onChange={handleLoginInput} name='password'  type="password" placeholder="Password" required/>
                            <a href="#">Forgot your password?</a>
                            <button type='submit'>Sign In</button>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn" onClick={handleOverLay}>Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button className="ghost" id="signUp" onClick={handleOverLay}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )}

    </>
  )
}

export default Auth
