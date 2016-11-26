import AppDispatcher from '../dispatcher/AppDispatcher';
import {
    ADD_TODO
}
from '../constants/actionTypes';
import {
    EventEmitter
} from 'events';
// Store 主要是负责资料以及业务逻辑处理，我们继承了 events 模组的 EventEmitter，当 action 传入 AppDispatcher.register 的处理范围后，根据 action type 选择适合处理的 store 进行处理，处理完后透过 emit 方法发出事件让监听的 Views Controller 知道。以下是 src/stores/TodoStore.js：
const store = {
    todos: [],
    editing: false
}

class TodoStoreClass extends EventEmitter {
    addChangeListener(callback) {
        this.on(ADD_TODO, callback);
    }
    removeChangeListener(callback) {
        this.removeListener(ADD_TODO, callback);
    }
    getTodos() {
        return store.todos;
    }
}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((action) => {
    switch (action.type) {
        case ADD_TODO:
            store.todos.push(action.payload.text);
            TodoStore.emit(ADD_TODO);
            break;
        default:
            return true;
    }
    return true;
});

export default TodoStore;
