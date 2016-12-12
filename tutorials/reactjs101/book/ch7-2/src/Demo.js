import React from 'react'

import {
	createStore
} from 'redux'

/** 
  下面是一個簡單的 reducers ，主要功能是針對傳進來的 action type 判斷並回傳新的 state
  reducer 規格：(state, action) => newState 
  一般而言 state 可以是 primitive、array 或 object 甚至是 ImmutableJS Data。但要留意的是不能修改到原來的 state ，
  回傳的是新的 state。由於使用在 Redux 中使用 ImmutableJS 有許多好處，所以我們的範例 App 也會使用 ImmutableJS 
*/

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

// 創建 Redux store 去存放 App 的所有 state
// store 的可用 API { subscribe, dispatch, getState } 

// createStore：createStore(reducer, [preloadedState], [enhancer])

// 我們知道在 Redux 中只會有一個 store。在產生 store 時我們會使用 createStore 這個 API 來創建 store。第一個參數放入我們的 reducer 或是有多個 reducers combine（使用 combineReducers）在一起的 rootReducers。第二個參數我們會放入希望預先載入的 state 例如：user session 等。第三個參數通常會放入我們想要使用用來增強 Redux 功能的 middlewares，若有多個 middlewares 的話，通常會使用 applyMiddleware 來整合。

let store = createStore(counter)

// 可以使用 subscribe() 來訂閱 state 是否更新。但實務通常會使用 react-redux 來串連 React 和 Redux

// 屬於 Store 的四個方法：

// getState()
// dispatch(action)
// subscribe(listener)
// replaceReducer(nextReducer)
// 關於 Store 重點是要知道 Redux 只有一個 Store 負責存放整個 App 的 State，而唯一能改變 State 的方法只有發送 action。

store.subscribe(() =>
	console.log(store.getState())
)

store.dispatch({
	type: 'INCREMENT'
})
store.dispatch({
	type: 'INCREMENT'
})
store.dispatch({
	type: 'DECREMENT'
})

class Demo extends React.Component {
	render() {
		return (
			<div className="demo"></div>
		)
	}
}

export default Demo