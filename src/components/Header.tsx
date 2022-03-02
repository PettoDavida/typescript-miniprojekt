import "./CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="header">
      <div className="project-name">
        <Link to="/">
          <h2>Fantastical Weather</h2>
        </Link>
      </div>
      <ul className="nav-btns">
        <li>
          <Link to="/">HOME</Link>
        </li>
        <li>
          <a href="mailto:ceo@pinaple.io">CONTACT</a>
        </li>
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
