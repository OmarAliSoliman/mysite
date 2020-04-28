import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-light">
        <div className="navbar-collapse" id="navbarText">
          <ul className="navbar-nav navbar-center">
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/">Blogs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName="active" className="nav-link" to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
