import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/util/ProtectedRoute';
import Home from './components/home/Home';
import Auth from './components/auth/Auth'
import Gallery from './components/gallery/Gallery';
import Blog from './components/blog/Blog';
import Calculator from './components/calculator/Calculator';
import App from './App'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
          <Route path='https://nordstone.netlify.app/auth/login' element={<Auth />} />
          <Route path="/" element={<App />}>
              <Route path='https://nordstone.netlify.app/' element={
                  <ProtectedRoute>
                      <Home />
                  </ProtectedRoute>
              } />

              <Route path='https://nordstone.netlify.app/gallery' element={
                  <ProtectedRoute>
                      <Gallery />
                  </ProtectedRoute>
              } />
              <Route path='https://nordstone.netlify.app/home' element={
                  <ProtectedRoute>
                      <Home />
                  </ProtectedRoute>
              } />
              <Route path='https://nordstone.netlify.app/blog' element={
                  <ProtectedRoute>
                      <Blog />
                  </ProtectedRoute>
              } />
              <Route path='https://nordstone.netlify.app/calculator' element={
                  <ProtectedRoute>
                      <Calculator />
                  </ProtectedRoute>
              } />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
