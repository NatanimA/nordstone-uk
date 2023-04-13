import React, { useState } from 'react'

import { HiMenuAlt4,HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


import './Navbar.scss'
//import { images } from '../../constants'

const Navbar = () => {

  const[toggle,setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        {/* <img src={images.logo} alt="logo" /> */}
      </div>
      <ul className='app__navbar-links'>
        {['home','gallery','blog','calculator'].map((item) => {
          return <li className='app__flex p-text' key={`link-${item}`}>
            <div />
            <Link to={`/${item}`}>{item}</Link>
          </li>
        })}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>

          {toggle && (
            <motion.div
              whileInView={{x:[300,0]}}
              transition={{duration:0.85,ease:'easeOut'}}
            >

              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home','gallery','blog','calculator'].map((item) => {
                return <li  key={item}>
                  <Link to={`/${item}`}  onClick={() => setToggle(false)}>{item}</Link>
                </li>
              })}
              </ul>

            </motion.div>
          )}
      </div>
    </nav>
  )
}

export default Navbar