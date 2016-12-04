import React, {
  Component
} from 'react';
// import logo from './logo.svg';
import './App.css';

import Remarkable from 'remarkable'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      secondsElapsed: 0
    }

    this.tick = this.tick.bind(this)
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed + 1
    }))
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  render() {
    return (
      <div>
        Seconds Elapsed:{this.state.secondsElapsed}
      </div>
    )
  }
}

class HelloMessage extends Component {
  render() {
    return (
      <div>Hello {this.props.name}</div>
    )
  }
}

class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todo,index)=>{
          return (
            <li key={todo.id}>
              {todo.todo}
            </li>
          )
        })}
      </ul>
    )

  }
}

class TodoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      todo: ''
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(e) {
    e.preventDefault()

    let todoItem = {
      todo: this.state.todo,
      id: Date.now()
    }

    this.setState((prevState) => ({
      todo: '',
      todoList: prevState.todoList.concat(todoItem)
    }))
  }

  handleChange(e) {
    this.setState({
      todo: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList todoList={this.state.todoList}/>
        <form >
          <input type="text" value={this.state.todo} onChange={this.handleChange}/>
          <input type="submit" 
            value={'ADD #'+(this.state.todoList.length+1)}
            onClick={this.handleClick}/>
        </form>
      </div>
    )
  }
}

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Type some *markdown* here!'
    }

    this.handleChange = this.handleChange.bind(this)
    this.getRawMarkup = this.getRawMarkup.bind(this)
  }

  handleChange() {
    this.setState({
      value: this.refs.textarea.value
    })
  }

  getRawMarkup() {
    var md = new Remarkable()

    return {
      __html: md.render(this.state.value)
    }
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <textarea
          onChange={this.handleChange}
          ref="textarea"
          defaultValue={this.state.value}
          rows="20">
        </textarea>
        <div className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <HelloMessage name="John"/>
        <Timer/>
        <TodoApp/>
        <MarkdownEditor/>
      </div>
    );
  }
}

export default App;