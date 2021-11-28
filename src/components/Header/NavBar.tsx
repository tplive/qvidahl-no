import * as React from 'react';
import { Link } from 'react-router-dom';

interface NavBar { }

class NavBar extends React.Component {
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