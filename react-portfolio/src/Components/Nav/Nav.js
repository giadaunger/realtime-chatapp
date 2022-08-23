import React from 'react';
import { Link } from 'react-router-dom'; 
import "./css/nav.css"
import "./css/responsive.css"

function Nav() {
  return (
    <div className="App">
        <nav>
            <ul className="nav-ul">
                <Link to="/" className="nav-link">
                  <li className="nav-li">Home</li>
                </Link>

                <Link to="/Projects" className="nav-link">
                  <li className="nav-li">Projects</li>
                </Link>

                <Link to="/Contact" className="nav-link">
                  <li className="nav-li">Contact</li>
                </Link>
            </ul>
        </nav>
    </div>
  );
}

export default Nav;
