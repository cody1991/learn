import React, {
	Component
} from 'react';

import TodoHeaderContainer from '../containers/TodoHeaderContainer'
import TodoListContainer from '../containers/TodoListContainer'


// 其中 src/components/Main/Main.js 是 Stateless Component，負責所有 View 的進入點
class Main extends Component {
	render() {
		return (
			<div className="Main">
        <TodoHeaderContainer/>
        <TodoListContainer/>
      </div>
		);
	}
}

export default Main;