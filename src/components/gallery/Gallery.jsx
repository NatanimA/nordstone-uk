import React, { useRef, useState } from 'react'

import Profile from '../util/Profile'
import "./Gallery.scss"

const Gallery = () => {



  return (
    <>
      <Profile />
      <div className="gallery-container">
          <div className="gallery-item" data-index="1">
              <img src="https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
          </div>
          <div className="gallery-item" data-index="2">
              <img src="https://images.pexels.com/photos/5969/wood-nature-forest-bridge.jpg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
          </div>
          <div className="gallery-item" data-index="3">
              <img src="https://images.pexels.com/photos/531321/pexels-photo-531321.jpeg?w=1260&h=750&dpr=2&auto=compress&cs=tinysrgb" />
          </div>
          <div className="gallery-item" data-index="4">
              <img src="https://images.pexels.com/photos/373920/pexels-photo-373920.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          </div>
          <div className="gallery-item" data-index="5">
              <img src="https://images.pexels.com/photos/164241/pexels-photo-164241.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
          </div>
          <div className="gallery-item" data-index="6">
              <img src="https://images.pexels.com/photos/417054/pexels-photo-417054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
          <div className="gallery-item" data-index="7">
              <img src="https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
          <div className="gallery-item" data-index="8">
              <img src="https://images.pexels.com/photos/38326/pexels-photo-38326.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
          <div className="gallery-item" data-index="9">
              <img src="https://images.pexels.com/photos/266691/pexels-photo-266691.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
        </div>
    </>
  )
}

export default Gallery
