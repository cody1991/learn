// 在这个范例中我们继承了 Facebook 提供的 Dispatcher API（主要是继承了 dispatch、register 和 subscribe 的方法），打造自己的 DispatcherClass，当使用者触发 handleAction() 会 dispatch 出事件。以下是 src/dispatch/AppDispatcher.js：

// Todo app dispatcher with actions responding to both
// view and server actions

import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            type: action.type,
            payload: action.payload
        })
    }
}

const AppDispatcher = new DispatcherClass();

export default AppDispatcher;
