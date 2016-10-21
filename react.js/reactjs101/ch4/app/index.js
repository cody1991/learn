// webpack：会在开发模式下开始一次性的建置
// webpack -p：会建置 production 的程式码
// webpack --watch：会监听程式码的修改，当储存时有异动时会更新档案
// webpack -d：加入 source maps 档案
// webpack --progress --colors：加上处理进度与颜色

import React from 'react';
import ReactDOM from 'react-dom';

class HelloMessage extends React.Component {
    // 若是需要绑定 this.方法或是需要在 constructor 使用 props，定义 state，就需要 constructor。若是在其他方法（如 render）使用 this.props 则不用一定要定义 constructor
    constructor(props) {
            // 对于 OOP 物件导向程式设计熟悉的读者应该对于 constructor 建构子的使用不陌生，事实上它是 ES6 的语法糖，骨子里还是 portotype based 物件导向程式语言。透过 extends 可以继承 React.Component 父类别。super 方法可以呼叫继承父类别的建构子
            super(props);
            this.state = {}
        }
        // render 是唯一必须的方法，但如果是单纯 render UI 建议使用 Functional Component 写法，效能较佳且较简洁
    render() {
        return (
            <div>Hello {this.props.name}</div>
        )
    }
}

// => 另外一种写法

// const HelloMessage = (props) => (
//     <div>Hello {props.name}</div>
// );

HelloMessage.propTypes = {
    name: React.PropTypes.string
}

HelloMessage.defaultProps = {
    name: 'Zuck'
}

class Timer extends React.Component {
    constructor(props) {
        super(props);
        // 与 ES5 React.createClass({}) 不同的是 component 内自定义的方法需要自行绑定 this context，或是使用 arrow function 
        this.tick = this.tick.bind(this);
        this.state = {
            secondsElapsed: 0
        }
    }
    tick() {
        // 累加器方法，每一秒被呼叫後就會使用 setState() 更新內部 state，讓 Component 重新 render
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    }
    componentDidMount() {
        // componentDidMount 為 component 生命週期中階段 component 已插入節點的階段，通常一些非同步操作都會放置在這個階段。這便是每1秒鐘會去呼叫 tick 方法
        this.interval = setInterval(this.tick, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    render() {
        return (
            <div>Seconds Elapsed:{this.state.secondsElapsed}</div>
        )
    }

}

const TodoList = (props) => (
    <ul>
    	{
    		props.items.map((item)=>(
    			<li key={item.id}>{item.text}</li>
    		))
    	}
	</ul>
)

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            items: [],
            text: ''
        }
    }
    onChange(e) {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        const nextItems = this.state.items.concat([{
            text: this.state.text,
            id: Date.now()
        }]);
        const nextText = '';
        this.setState({
            items: nextItems,
            text: nextText
        });
    }
    render() {
        return (
            <div>
        		<h3>TODO</h3>
        		<TodoList items={this.state.items}/>
        		<form onSubmit={this.handleSubmit}>
        			<input onChange={this.onChange} value={this.state.text}/>

        			<button>{'Add #' + (this.state.items.length + 1)}</button>
        		</form>
        	</div>
        )
    }
}

ReactDOM.render(<HelloMessage name="cody"/>, document.getElementById('app'));

ReactDOM.render(<Timer/>, document.getElementById('app2'));
ReactDOM.render(<TodoApp/>, document.getElementById('app3'));
