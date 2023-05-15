import React from "react";
import { Link } from "react-router-dom";
import './Home.scss'
import tia from '../../assets/img/tia5.jpg'

const Home = () => {
  return (
    <div className="home-container">
      <h1>New Arrivals..</h1>
      <Link to="/ropa"><h2>SHOP NOW</h2></Link>
      <img src={tia} alt="fondo" className="img" />
    </div>
  );
};

export default Home;