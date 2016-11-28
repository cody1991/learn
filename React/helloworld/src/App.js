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
import Blog from './blog.js'
import Form from './form.js'
import Calculator from './Calculator.js'
import Containment from './Containment.js'

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

    const messagesItem = unreadMessage.map((message, index) => (
        <li key={index}>{message}</li>
    ));
    return (
        <div>
            {unreadMessage.length > 0 &&
                <div>
                    <h2>
                        You have {unreadMessage.length} unread messages
                    </h2>
                    <ul>
                        {messagesItem}
                    </ul>
                </div>

            }
        </div>
    )
}

const messages = ['React', 'Vue', 'Angular'];

const posts = [{
    id: 1,
    title: 'Hello World',
    content: 'Welcome to learning React!'
}, {
    id: 2,
    title: 'Installation',
    content: 'You can install React from npm.'
}];

class App extends Component {
    render() {
        return (
            <div className="App">
                <Containment/>
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
                <hr/>
                <Blog posts={posts}/>
                <Form/>
                <hr/>
                <Calculator/>
            </div>
        );
    }
}

export default App;