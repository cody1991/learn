import React from 'react'
import TodoStore from '../stores/TodoStore'

function getAppState() {
	return {
		todos: TodoStore.getTodos()
	}
}

class TodoList extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.state = {
			todos: []
		}
	}
	componentDidMount() {
		TodoStore.addChangeListener(this.onChange)
	}
	onChange() {
		this.setState(getAppState())
	}
	render() {
		return (
			<div className="header">
				<ul>
					{
						this.state.todos.map((todo,key)=>(
							<li key={key}>todo</li>
						))
					}
				</ul>
			</div>
		)
	}
}

export default TodoList