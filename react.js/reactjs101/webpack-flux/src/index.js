import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeader from './components/TodoHeader.js';
import TodoList from './components/TodoList';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
            	<TodoHeader/>
            	<TodoList/>
    		</div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
