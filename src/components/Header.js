import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from 'react-router'
import logoImage from "../assets/images/headerLogo.png";
import "../styles/Header.css";

const Header = ({setIsListPage}) => {
  return (
    <main className="App">
    <div className="Header">
      <img className="logo" src={logoImage} alt="" />
      <div className="links-container">

        <Link to="/">
          <button onClick={()=>setIsListPage(false)} className="button-54">Home</button>
        </Link>

        <Link to="/shoes-list">
          <button className="button-54">Shoes</button>
        </Link>

        <Link to="/add-shoes">
          <button  onClick={()=>setIsListPage(false)}  className="button-54">Add Shoes</button>
        </Link>
      </div>
    </div>
      <Outlet />
    </main>
  );
};

export default Header;
