import React, { useState,useEffect } from 'react'
import {getStorage, ref, uploadBytes,listAll,getDownloadURL, list } from 'firebase/storage';
import { v4 as uuidv4} from "uuid"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import CameraMode from './CameraMode'
import dataURItoBlob from '../../constants/util-func'
import Profile from '../util/Profile'
import "./Gallery.scss"
import { storage } from '../../constants/firebase-config';
import { allEmojis } from '../../constants/constants';
import { set } from 'firebase/database';

const Gallery = () => {
  const [photoMode,setPhotoMode] = useState(false)
  const [picture,setPhoto] = useState(null)
  const [photoList,setPhotoList] = useState([])
  const notify =(message) => toast(message)

  const listRef = ref(storage, 'images/');

  const fetchImageUrls = async () => {
      const imageRefs = await listAll(listRef);
      const urls = await Promise.all(
        imageRefs.items.map(async (itemRef) => {
          const url = await getDownloadURL(itemRef);
          return url;
        })
      );
      setPhotoList(urls);
    };

  useEffect(() => {

    fetchImageUrls();
  },[])



  const handlePhotoMode = () => {
    setPhotoMode(true)
  }

  const handleNoPhotoMode = () => {
    setPhotoMode(false)
  }

  const handlePhotoPost =  async () => {
    const image = dataURItoBlob(picture)

    try{
        const storageRef = ref(storage,'images/' + uuidv4())

        uploadBytes(storageRef, image).then((snapshot) => {
            fetchImageUrls()
        });
        notify("Photo is live." + allEmojis[Math.floor(Math.random() * allEmojis.length)])
        setPhotoMode(false)
    }catch(err){
        notify(err)
    }

  }

  const handleFileSelect = e => {
    setPhoto(e.target.files[0])
  }

  const handleFilePost = async () => {
    try{
        const storageRef = ref(storage,'images/' + uuidv4())
        await uploadBytes(storageRef, picture);
        fetchImageUrls()
        setPhoto(null)
        notify("Photo is live." + allEmojis[Math.floor(Math.random() * allEmojis.length)])
    }catch(err){
      notify(err)
    }

  }

  return (
    <>
      <div className='cameramode-container'>
            <CameraMode photoMode={photoMode} handleNoPhotoMode={handleNoPhotoMode} handlePhotoMode={handlePhotoMode} />
      </div>
      { photoMode ?
        (<div className='cameramode-container'>
            <Profile handlePhotoPost={handlePhotoPost} setPhoto={setPhoto} />
        </div>)  :
      (
        <div className='gallery-container gallery-input-container'>
            <div className='gallery-item'>
                <input onChange={(e) =>{
                  handleFileSelect(e)
                  }} type='file'  accept='image/*' />
            </div>
            {picture ? (
              <button onClick={handleFilePost} className='btn-post'>
                Post
              </button>) : null}

        </div>
      )
      }
      <div className="gallery-container">
          { photoList && photoList.length > 0 && photoList.map( (photo,index) => (
              <div className="gallery-item" data-index={index} key={index}>
                <img src={photo} />
              </div>
          ))}
        </div>
        <ToastContainer />
    </>
  )
}

export default Gallery
