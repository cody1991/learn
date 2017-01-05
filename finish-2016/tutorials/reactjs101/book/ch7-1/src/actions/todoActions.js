import AppDispatcher from '../dispatch/AppDispatcher'
import {
	ADD_TODO
} from '../constants/actionTypes'

export const TodoActions = {
	addTodo(text) {
		AppDispatcher.handleAction({
			type: ADD_TODO,
			payload: {
				text
			}
		})
	}
}