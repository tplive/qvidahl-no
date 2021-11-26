import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <h1>Hello</h1>
        </div>
      </Router>
    )
  }
}

export default App;