// 在上面的 Component 中我们让使用者可以新增代办事项，接下来我们要让新增的代办事项可以显示。我们在 componentDidMount 设了一个监听器 TodoStore 资料改变时会去把资料重新再更新，这样当使用者新增代办事项时 TodoList 就会保持同步。当以下是 src/components/TodoList.js 完整程式码：

import React, { Component } from 'react';
import TodoStore from '../stores/TodoStore';

function getAppState() {
    return {
        todos: TodoStore.getTodos()
    }
}

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            todos: []
        }
    }
    componentDidMount() {
        TodoStore.addChangeListener(this.onChange);
    }
    onChange() {
        this.setState(getAppState());
    }
    render() {
        return (
            <div>
    			<ul>
    				{
    					this.state.todos.map((todo,key)=>(
    							<li key={key}>{todo}</li>
    						))
    				}
    			</ul>
    		</div>
        )
    }
}

export default TodoList
