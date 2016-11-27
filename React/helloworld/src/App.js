import React, {
    Component
} from 'react';
import logo from './logo.svg';
import './App.css';

import Helloworld from './Helloworld.js'
import Comment from './comment.js'
import Clock from './clock.js'
import Handle from './handle.js'
import LoginControl from './loginControl.js'
import Warning from './warning.js'

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'cody',
        avatarUrl: 'http://placekitten.com/g/64/64'
    }
}

function Mailbox(props) {
    const unreadMessage = props.unreadMessage;
    return (
        <div>
            {unreadMessage.length > 0 &&
                <h2>
                    You have {unreadMessage.length} unread messages
                </h2>
            }
        </div>
    )
}

const messages = ['React', 'Vue', 'Angular'];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Warning />
                <Mailbox unreadMessage={messages}/>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <Helloworld age="20" />
                <Comment date={comment.date} text={comment.text} author={comment.author}/>
                <hr/>
                <Clock />
                <Clock />
                <Clock />
                <hr/>
                <Handle />
                <hr/>
                <LoginControl/>
            </div>
        );
    }
}

export default App;