import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './App.css';

import Spinner from './spinner.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      demoShow: false,
      demoText: this.demoShow ? '隐藏' : '显示'
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    this.setState((prevState) => ({
      demoShow: !prevState.demoShow,
      demoText: !prevState.demoShow ? '隐藏' : '显示'
    }))
  }

  render() {
    return (
      <div className="App">
        <div className="item">
          <Spinner show={true}/>          
        </div>
        <div className="item">
          <Spinner show={true} color="#3498db"/>
        </div>
        <div className="item">
          <Spinner show={true} type="gif"/>
        </div>
        <div className="item">
          <Spinner show={true} type="gif">
            <img width="80" src="http://www.downgraf.com/wp-content/uploads/2014/09/01-progress.gif" alt="loading"/>
          </Spinner>
        </div>
        <div className="item">
          <Spinner show={this.state.demoShow}></Spinner>
        </div>
        <button onClick={this.handleClick}>
          {this.state.demoText}
        </button>
      </div>
    );
  }
}

export default App;