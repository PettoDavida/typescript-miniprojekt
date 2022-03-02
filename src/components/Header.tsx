import React from "react";
import "./Header.css";

function Header() {
  return (
    <nav className="header">
      <div className="project-name">
        <h1>PROJECT</h1>
      </div>
      <ul className="nav-btns">
        <li>HOME</li>
        <li><a href="mailto:ceo@pinaple.io">CONTACT</a></li>
        <li>ABOUT</li>
      </ul>
    </nav>
  );
}

export default Header;
