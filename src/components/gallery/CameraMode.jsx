import React from 'react'

const CameraMode = ({handleNoPhotoMode,handlePhotoMode,photoMode}) => {
  return (

    <>
        {photoMode ? (
            <button onClick={handleNoPhotoMode} style={{background: '#ff3b30'}}>
                Turn off
            </button>) :  (
            <button onClick={handlePhotoMode} style={{background: '#4cd964'}}>
                Camera mode
            </button>) }
    </>
  )
}

export default CameraMode
