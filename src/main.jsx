import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/util/ProtectedRoute';
import Home from './components/home/Home';
import Auth from './components/auth/Auth'
import App from './App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={'/'}>
      <Routes>
          <Route path='/auth/login' element={<Auth />} />
          <Route path="/" element={<App />}>
              <Route path='' element={
                  <ProtectedRoute>
                      <Home />
                  </ProtectedRoute>
              } />
          </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
