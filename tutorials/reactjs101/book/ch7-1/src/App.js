import React, {
  Component
} from 'react';
import './App.css';

import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <TodoHeader/>
        <TodoList/>
      </div>
    );
  }
}

export default App;