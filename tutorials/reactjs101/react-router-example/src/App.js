import React, {
  Component
} from 'react';
import './App.css';

// import {
//   IndexLink
// } from 'react-router'
import NavLink from './NavLink'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Router Tutorial</h1>
        <ul>
          <li>
            <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/repos/">Repos</NavLink>
          </li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;