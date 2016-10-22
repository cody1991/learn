React Component，就像人會有生老病死一樣有生命週期。一般而言 Component 有以下三種生命週期的狀態：

	Mounting：已插入真實的 DOM

	Updating：正在被重新渲染
	
	Unmounting：已移出真實的 DOM

針對 Component 的生命週期狀態 React 也有提供對應的處理方法：

Mounting

	componentWillMount()

	componentDidMount()
Updating

	componentWillReceiveProps(object nextProps)：已載入元件收到新的參數時呼叫

	shouldComponentUpdate(object nextProps, object nextState)：元件判斷是否重新渲染時呼叫，起始不會呼叫除非呼叫 forceUpdate()

	componentWillUpdate(object nextProps, object nextState)

	componentDidUpdate(object prevProps, object prevState)

Unmounting
	
	componentWillUnmount()

很多讀者一開始學習 Component 生命週期時會覺得很抽象，所以接下來用一個簡單範例讓大家感受一下 Component 的生命週期。

讀者可以發現當一開始載入元件時第一個會觸發 console.log('constructor');，依序執行 componentWillMount、componentDidMount ，而當點擊文字觸發 handleClick() 更新 state 時則會依序執行 componentWillUpdate、componentDidUpdate

---

在 Flux Unidirectional Data Flow（单项流）世界里有四大主角，分别负责不同对应的工作：

#actions / Action Creator

action 负责定义所有改变 state（状态）的行为，可以让开发者快速了解 App 的各种功能，若你想改变 state 你只能发 action。注意 action 可以是同步或是非同步。例如：新增代办事项，呼叫非同步 API 获取资料。

实务上我们会分成 action 和 Action Creator。action 为描述行为的 object（物件），Action Creator 将 action 送给 dispatcher。一般来说符合 Flux Standard Action 的 action 会如以下范例程式码，具备 type 来区别所触发的行为。而 payload 则是所夹带的资料：

	// action
	const addTodo = {
	  type: 'ADD_TODO',
	  payload: {
	    text: 'Do something.'  
	  }
	}

	AppDispatcher.dispatch(addTodo);

当发生 rejected Promise 情况：

	{
	  type: 'ADD_TODO',
	  payload: new Error(),
	  error: true
	}

#Dispatcher

Dispatcher 是 Flux 架构的核心，每个 App 只有一个 Dispatcher，提供 API 让 store 可以注册 callback function，并负责向所有 store 发送 action 事件。在本范例中我们使用 Facebook 提供的 Dispatcher API，其内建有 dispatch 和 subscribe 方法。

#Stores

一个 App 通常会有多个 store 负责存放业务逻辑，根据不同业务会有不同 store，例如：TodoStore、RecipeStore。 store 负责操作和储存资料并提供 view 使用 listener（监听器），若有资料更新即会触发更新。值得注意的是 store 只提供 getter API 读取资料，若想改变 state 一律发送 action。

#Views（Controller Views）

这部份是 React 负责的范畴，负责提供监听事件的 callback function，当事件发生时重新取得资料并重绘 View。

---

#Flux 架构前置作业：

Stores 向 Dispatcher 注册 callback，当资料改变时告知 Stores

Controller Views 向 Stores 取得初始资料

Controller Views 将资料给 Views 去渲染 UI

Controller Views 向 store 注册 listener，当资料改变时告知 Controller Views

#Flux 与使用者互动运作流程：

使用者和 App 互动，触发事件，Action Creator 发送 actions 给 Dispatcher
Dispatcher 依序将 action 传给 store 并由 action type 判断合适的处理方式
若有资料更新则会触发 Controller Views 向 store 注册的 listener 并向 store 取得更新资料
View 根据 Controller Views 的新资料重新绘制 UI

---

#Flux 优势：

让开发者可以快速了解整个 App 中的行为

资料和业务逻辑统一存放好管理

让 View 单纯化只负责 UI 的排版不需负责 state 管理

清楚的架构和分工对于复杂中大型应用程式易于维护和管理程式码

#Flux 劣势：

程式码上不够简洁

对于简单小应用来说稍微复杂

以上就是 Flux 的实战入门，我知道一开始接触 Flux 的读者一定会觉得很抽象，有些读者甚至会觉得这个架构到底有什么好处（明明感觉没比 MVC 高明到哪去或是一点都不简洁），但如同上述优点所说 Flux 设计模式的优势在于清楚的架构和分工对于复杂中大型应用程式易于维护和管理程式码。若还是不熟悉的读者可以跟着范例多动手，相信慢慢就可以体会 Flux 的特色。事实上，在开发社群中为了让 Flux 架构更加简洁，产生了许多 Flux-like 的架构和函式库，接下来将带读者们进入目前最热门的架构：Redux。

---

在开始实作 Redux App 之前我们先来了解一下 Redux 和 Flux 的一些差异：

1 只使用一个 store 将整个应用程式的状态 (state) 用物件树 (object tree) 的方式储存起来：

原生的 Flux 会有许多分散的 store 储存各个不同的状态，但在 redux 中，只会有唯一一个 store 将所有的资料用物件的方式包起来。

	//原生 Flux 的 store
	const userStore = {
	    name: ''
	}
	const todoStore = {
	    text: ''
	}

	// Redux 的单一 store
	const state = {
	    userState: {
	        name: ''
	    },
	    todoState: {
	        text: ''
	    }
	}

2 唯一可以改变 state 的方法就是发送 action，这部份和 Flux 类似，但 Redux 并没有像 Flux 设计有 Dispatcher。Redux 的 action 和 Flux 的 action 都是一个包含 type 和 payload 的物件。

3 Redux 拥有 Flux 所没有的 Reducer。Reducer 根据 action 的 type 去执行对应的 state 做变化的函式叫做 Reducer。你可以使用 switch 或是使用函式 mapping 的方式去对应处理的方式。

4 Redux 拥有许多方便好用的辅助测试工具（例如：redux-devtools、react-transform-boilerplate），方便测试和使用 Hot Module Reload。

---

https://github.com/carlleton/reactjs101/blob/zh-CN/Ch07/images/redux-flowchart.png

从上述的图中我们可以看到 Redux 资料流的模型大致上可以简化成： View -> Action -> (Middleware) -> Reducer。当使用者和 View 互动时会触发事件发出 Action，若有使用 Middleware 的话会在进入 Reducer 进行一些处理，当 Action 进到 Reducer 时，Reducer 会根据，action type 去 mapping 对应处理的动作，然后回传回新的 state。View 则因为侦测到 state 更新而重绘页面。在这个章节我们讨论的是 synchronous（同步）的情形，asynchronous（非同步）的状况会在接下来的章节进行讨论。以下就用官方网站上的简单范例来让大家感受一下 Redux 的整个使用流程：

	import { createStore } from 'redux';

	/** 
	  下面是一个简单的 reducers ，主要功能是针对传进来的 action type 判断并回传新的 state
	  reducer 规格：(state, action) => newState 
	  一般而言 state 可以是 primitive、array 或 object 甚至是 ImmutableJS Data。但要留意的是不能修改到原来的 state ，
	  回传的是新的 state。由于使用在 Redux 中使用 ImmutableJS 有许多好处，所以我们的范例 App 也会使用 ImmutableJS 
	*/
	function counter(state = 0, action) {
	  switch (action.type) {
	  case 'INCREMENT':
	    return state + 1;
	  case 'DECREMENT':
	    return state - 1;
	  default:
	    return state;
	  }
	}

	// 创建 Redux store 去存放 App 的所有 state
	// store 的可用 API { subscribe, dispatch, getState } 
	let store = createStore(counter);

	// 可以使用 subscribe() 来订阅 state 是否更新。但实务通常会使用 react-redux 来串连 React 和 Redux
	store.subscribe(() =>
	  console.log(store.getState());
	);

	// 若想改变 state ，一律发 action
	store.dispatch({ type: 'INCREMENT' });
	// 1
	store.dispatch({ type: 'INCREMENT' });
	// 2
	store.dispatch({ type: 'DECREMENT' });
	// 1

---

Redux API 入门

# createStore：createStore(reducer, [preloadedState], [enhancer])

我们知道在 Redux 中只会有一个 store。在产生 store 时我们会使用 createStore 这个 API 来创建 store。第一个参数放入我们的 reducer 或是有多个 reducers combine（使用 combineReducers）在一起的 rootReducers。第二个参数我们会放入希望预先载入的 state 例如：user session 等。第三个参数通常会放入我们想要使用用来增强 Redux 功能的 middlewares，若有多个 middlewares 的话，通常会使用 applyMiddleware 来整合。

# Store

属于 Store 的四个方法：

	getState()

	dispatch(action)

	subscribe(listener)

	replaceReducer(nextReducer)

关于 Store 重点是要知道 Redux 只有一个 Store 负责存放整个 App 的 State，而唯一能改变 State 的方法只有发送 action。

# combineReducers：combineReducers(reducers)

combineReducers 可以将多个 reducers 进行整合并回传一个 Function，让我们可以将 reducer 适度分割

# applyMiddleware：applyMiddleware(...middlewares)

官方针对 Middleware 进行说明

	It provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

若有 NodeJS 的经验的读者，对于 middleware 概念应该不陌生，让开发者可以在 req 和 res 之间进行一些操作。在 Redux 中 Middleware 则是扮演 action 到达 reducer 前的第三方扩充。而 applyMiddleware 可以将多个 middlewares 整合并回传一个 Function，便于使用。

若是你要使用 asynchronous（非同步）的行为的话需要使用其中一种 middleware： redux-thunk、redux-promise 或 redux-promise-middleware ，这样可以让你在 actions 中 dispatch Promises 而非 function。asynchronous（非同步）运作方式就如同下图所示：

https://github.com/carlleton/reactjs101/blob/zh-CN/Ch07/images/react-redux-diagram.png

# bindActionCreators：bindActionCreators(actionCreators, dispatch)

bindActionCreators 可以将 actionCreators 和 dispatch 绑定，并回传一个 Function 或 Object，让程式更简洁。但若是使用 react-redux 可以用 connect 让 dispatch 行为更容易管理

# compose：compose(...functions)

compose 可以将 function 由右到左合并并回传一个 Function，如官网范例所示：

	import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
	import thunk from 'redux-thunk'
	import DevTools from './containers/DevTools'
	import reducer from '../reducers/index'

	const store = createStore(
	  reducer,
	  compose(
	    applyMiddleware(thunk),
	    DevTools.instrument()
	  )
	)