import React from 'react';
import { Link } from 'react-router-dom';
import { FcCalculator } from 'react-icons/fc';
import './Navbar.css';
import 'animate.css';

const Navbar = () => (
  <nav>
    <div className="logo animate__animated animate__pulse animate__infinite">
      <FcCalculator />
      <p>Math Magicians</p>
    </div>
    <div className="routes">
      <Link to="/">Home</Link>
      <Link to="/calculator">Calculator</Link>
      <Link to="/quotes">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;
