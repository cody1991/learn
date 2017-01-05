import AppDispatcher from '../dispatch/AppDispatcher'
import {
	ADD_TODO
} from '../constants/actionTypes'
import {
	EventEmitter
} from 'events'

const store = {
	todos: [],
	editing: false
}

class TodoStoreClass extends EventEmitter {
	addChangeListener(callback) {
		this.on(ADD_TODO, callback)
	}
	removeChangeListener(callback) {
		this.removeListener(ADD_TODO, callback)
	}
	getTodos() {
		return store.todos
	}
}

const TodoStore = new TodoStoreClass()

AppDispatcher.register((action) => {
	switch (action.type) {
		case ADD_TODO:
			store.todos.push(action.payload.text)
			TodoStore.emit(ADD_TODO)
			break
		default:
			return true
	}
})

export default TodoStore