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