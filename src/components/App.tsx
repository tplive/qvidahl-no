import * as React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Header/NavBar';

class App extends React.Component {
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