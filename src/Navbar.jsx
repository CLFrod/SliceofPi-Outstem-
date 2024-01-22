// Made by : Callum Frodsham 300199446
import './Navbar.css'
import logo from './assets/img/logo3.ico';
import React from 'react';
import { useNavigate } from 'react-router-dom';


// functionality for 

function NavBar() {
  const navigate = useNavigate();
  const routeToReviewAnalytics = () => {
    navigate('/customerAnalytics');
  };
  const routeToOrderAnalytics = () => {
    navigate('/orderAnalytics');
  };

  return (
    <>
    <header className='header'>
    <h1 className="headerText">Slice of Pi</h1>
    <img src={logo} className="pizzaLogo" alt="logo" />
    <div className="line"></div>
    </header>
    <hr className="breakLine"></hr>
    <div className="navbar">
      <h2 className='navBarText'>Management Dashboard</h2>
      <div className='buttonBox'>
        <button className="orderAnalyticsButton" onClick={routeToOrderAnalytics} >Order Analytics</button>
        <button className="reviewAnalyticsButton" onClick={routeToReviewAnalytics}>Customer Analytics</button>
      </div>
    </div>
    <hr className="breakLine"></hr>
    </>
  )
}

export default NavBar
