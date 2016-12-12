import React from 'react'
import {
	TodoActions
} from '../actions/todoActions'


class TodoHeader extends React.Component {
	constructor(props) {
		super(props)
		this.onChange = this.onChange.bind(this)
		this.onAdd = this.onAdd.bind(this)
		this.state = {
			text: '',
			editing: false
		}
	}
	onChange(e) {
		this.setState({
			text: e.target.value
		})
	}
	onAdd() {
		TodoActions.addTodo(this.state.text)
		this.setState({
			text: ''
		})
	}
	render() {
		return (
			<div className="header">
				<h1>TodoFlux</h1>
				<div>
					<input type="text"
						value={this.state.text}
						placeholder="输入待办事件"
						onChange={this.onChange}/>
					<button onClick={this.onAdd}>确定</button>
				</div>
			</div>
		)
	}
}

export default TodoHeader