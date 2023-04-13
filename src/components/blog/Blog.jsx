import React, { useEffect, useState } from 'react'
import { ref, push, set,onValue } from "firebase/database";
import { database } from '../../constants/firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from "uuid";

import "./Blog.scss"
import { allEmojis } from '../../constants/constants';



const Blog = () => {
  const [blogDetails,setBlogDetails] = useState({title:"",content:""})
  const [blogs,setBlogs] = useState([])
  const [message,setMessage] = useState("");
  const notify = () => toast(message)

  useEffect(() => {
    const blogsRef = ref(database, 'blogs/');
    onValue(blogsRef, (snapshot) => {
      const data = snapshot.val()
      const keys = Object.keys(data)
      const filteredData = []
      keys.forEach( key => {
        const bl = {
          id:key,
          title:data[key].title,
          content:data[key].content
        }
        filteredData.push(bl);
      });
      setBlogs(filteredData)
    });
  },[])

  const handleBlogDetails = e => {
    setBlogDetails({
      ...blogDetails,
      [e.target.name]:e.target.value
    })
  }

  const handleBlogPost = async (e) => {
    console.log(e)
    const form = document.getElementsByTagName('form')
    e.preventDefault()
    try {
      const blogListRef = ref(database, 'blogs');
      const time = new Date()
      console.log(blogListRef)
      const newBlogRef = push(blogListRef);
      await set(newBlogRef, {
          ...blogDetails
      });
      setBlogs((pv) => {
        return [blogDetails,...pv]
      })
      setBlogDetails({
        title:"",
        content:""
      })
      setMessage("Blog is live" + allEmojis[Math.floor(Math.random() * allEmojis.length)])
      notify()
    } catch (err) {
      setMessage(err)
      notify()
    }
  }

  return (
    <>
      <div className='blog-container' >
      <div className="blog-item blog-item-form-container">
          <h2>What's on your mind?</h2>
          <form onSubmit={handleBlogPost}>
                <div className="blog-item-form content">
                  <label htmlFor="title">Title</label>
                  <input onChange={handleBlogDetails} value={blogDetails.title} id="title" type="text" name='title' required/>
                </div>
                <div className="blog-item-form content">
                  <label htmlFor="content">Content</label>
                  <textarea onChange={handleBlogDetails} value={blogDetails.content} id="content" name='content' required></textarea>
                </div>

                <button type='submit'>Post</button>
          </form>
      </div>
      { blogs && blogs.length > 0 && blogs.map((blog) => (
          <div className="blog-item" key={blog.id || uuidv4()}>
              <div className="content">
                  <div className="title">{blog.title}</div>
                  <div className="rounded"></div>

                  <p>
                      {blog.content}
                  </p>
              </div>

              <div className="item-arrow">
                  <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
              </div>
          </div>
      ))}
      </div>
      <ToastContainer />
    </>
  )
}

export default Blog
