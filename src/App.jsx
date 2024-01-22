// Made by: Callum Frodsham
import { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css'
import Navbar from './Navbar.jsx'
import ReviewAnalytics from './ReviewAnalytics.jsx'
import OrderAnalytics from './OrderAnalytics.jsx'
import Order from './Order.js'


function App() {
  

  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ReviewAnalytics />} />
        <Route path="/orderAnalytics" element={<OrderAnalytics />}/>
        <Route path="/customerAnalytics" element={<ReviewAnalytics />}/>
      </Routes>
    </Router> 
    </>
  )
}

export default App
