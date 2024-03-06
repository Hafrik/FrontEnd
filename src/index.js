import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signin from './pages/Signin'
import Navbar from './components/Navbar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Navbar />
    <Signin />
  </React.StrictMode>
)
