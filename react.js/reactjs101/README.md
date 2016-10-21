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

讀者可以發現當一開始載入元件時第一個會觸發 console.log('constructor');，依序執行 componentWillMount、componentDidMount ，而當點擊文字觸發 handleClick() 更新 state 時則會依序執行 componentWillUpdate、componentDidUpdate：