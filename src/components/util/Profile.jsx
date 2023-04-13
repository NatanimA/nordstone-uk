import React,{useState,useRef,useCallback} from 'react'
import Webcam from 'react-webcam'

import { videoConstraints } from '../../constants/constants'
import "./Profile.scss"

const Profile = ({setPhoto,handlePhotoPost}) => {
  const [picture, setPicture] = useState('')
  const webcamRef = React.useRef(null)
  const capture = React.useCallback(() => {
    const pictureSrc = webcamRef.current.getScreenshot()
    setPicture(pictureSrc)
    setPhoto(pictureSrc)
  })
  return (
    <>
    <div className='profile__container'>
      <div>
        {picture == '' ? (
          <Webcam
            audio={false}
            height={400}
            ref={webcamRef}
            width={400}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />
        ) : (
          <img src={picture} />
        )}
      </div>
      <div className='camera__capture_btn'>
        {picture != '' ? (
          <>
          <button
            onClick={(e) => {
              e.preventDefault()
              setPicture('')
            }}
            className="btn btn-primary"
          >
            Retake
          </button>
           <button onClick={() => {
            handlePhotoPost()
           }} className='btn-post'>
            Post
           </button>
          </>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault()
              capture()
            }}
            className="btn btn-primary"
          >
            Capture
          </button>
        )}
      </div>
    </div>
  </>
  )
}

export default Profile
