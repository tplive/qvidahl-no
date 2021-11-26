import React, { Component } from 'react';
import { Link } from 'react-router-dom';

interface NavBar { }

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
      </header>
    )
  }
} export default NavBar;