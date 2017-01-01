// 以下是我们利用 AppDispatcher 打造的 Action Creator 由 handleAction 负责发出传入的 action ，完整程式码如 src/actions/todoActions.js：
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ADD_TODO } from '../constants/actionTypes';

console.log(AppDispatcher, ADD_TODO);

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
