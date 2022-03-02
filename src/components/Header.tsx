import React from "react";
import "../components/CSS/Header.css";
import { FaCloudSunRain } from 'react-icons/fa';


function Header() {
  return (
    <nav className="header">
      <div className="project-name">
        <h1>FANTASTICAL WEATHER</h1>
      </div>
      <div className="sunIcon"><FaCloudSunRain/></div>
      <ul className="nav-btns">
        <li>HOME</li>
        <li><a href="mailto:ceo@pinaple.io">CONTACT</a></li>
        <li>ABOUT</li>
      </ul>
    </nav>
  );
}

export default Header;
