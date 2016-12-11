import React, {
  Component,
  PropTypes
} from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo'
import MarkdownEditor from './MarkdownEditor'
import UserGithub from './UserGithub'


class HelloMessage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      seconds: 0
    }
    this.tick = this.tick.bind(this)
  }

  tick() {
    // this.setState({
    //   seconds: this.state.seconds + 1
    // })
    this.setState((prevState) => {
      return {
        seconds: prevState.seconds + 1
      }
    })
  }

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>Hello {this.props.name}, seconds:{this.state.seconds}</div>
    )
  }
}

HelloMessage.propTypes = {
  name: PropTypes.string
}
HelloMessage.defaultProps = {
  name: 'Cody'
}


class App extends Component {
  constructor(props) {
    super(props)
    console.log('contructor')

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      name: 'cody'
    }
  }

  handleClick() {
    this.setState({
      'name': 'Zuck'
    })
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div className="App">
        <UserGithub source="https://api.github.com/users/cody1991"/>
        <div onClick={this.handleClick}>
          Hi,{this.state.name}
        </div>
        <MarkdownEditor/>
        <Todo/>
        <HelloMessage/>
        <HelloMessage name="Sandy"/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;