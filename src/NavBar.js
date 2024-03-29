// Navbar.js

import React from 'react';
import './App.css'; // Import the CSS file


const Navbar = () => {
  return (
    <header>
      <div className="row">
        <ul className="main-nav">
          <li><a href="">home.</a></li>
          <li className="dropdown">
            <a href="#">Pakistan.</a>
            <div className="dropdown-content">
              <a href="#">Gilgit</a>
              <a href="#">Naran</a>
              <a href="#">Muree</a>
              <a href="#">Quetta</a>
            </div>
          </li>
          <li><a href="">Canada.</a></li>
        </ul>
      </div>
      <h1>Ali's سفرنامہ </h1>


    </header>
  );
};

export default Navbar;
