import React from "react";
import { Link } from "react-router-dom";
import logoImage from '../assets/images/logo.png'
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header">
        <img className="logo" src={logoImage} alt="" />
      <div className="links-container">
      <Link to="/">
      <button className="button-54">Home</button>
      </Link>
        <Link to="/shoes-list">
        <button className="button-54">Shoes</button>
        </Link>

        <Link to="/add-shoes">
        <button className="button-54">Add Shoes</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
