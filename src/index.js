import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './pages/Signin'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  </React.StrictMode>
)
