// webpack：会在开发模式下开始一次性的建置
// webpack -p：会建置 production 的程式码
// webpack --watch：会监听程式码的修改，当储存时有异动时会更新档案
// webpack -d：加入 source maps 档案
// webpack --progress --colors：加上处理进度与颜色

import React from 'react';
import ReactDOM from 'react-dom';
import Remarkable from 'remarkable';
import jQuery from 'jquery';

console.log(jQuery);

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

class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.rawMarkup = this.rawMarkup.bind(this);
        this.state = {
            value: 'Type some *markdown* here!'
        }
    }
    handleChange() {
        this.setState({
            value: this.refs.textarea.value
        });
    }
    rawMarkup() {
        const md = new Remarkable();
        return {
            __html: md.render(this.state.value)
        }
    }
    render() {
        return (
            <div className="MarkdownEditor">
      			<h3>Input</h3>
      			 <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value}></textarea>
      			 <h3>Output</h3>
      			 <div className="content" dangerouslySetInnerHTML={this.rawMarkup()}></div>
        	</div>
        )
    }
}

ReactDOM.render(<HelloMessage name="cody"/>, document.getElementById('app'));

ReactDOM.render(<Timer/>, document.getElementById('app2'));
ReactDOM.render(<TodoApp/>, document.getElementById('app3'));
ReactDOM.render(<MarkdownEditor/>, document.getElementById('app4'));

// 复习下

//  注意元件開頭第一個字母都要大寫
class MyComponent extends React.Component {
    // render 是 Class based 元件唯一必須的方法（method）
    // 值得留意的是在 ES6 Class 中 render() 是唯一必要的方法（但要注意的是請保持 redner() 的純粹，不要在裡面進行 state 修改或是使用非同步方法和瀏覽器互動，若需非同步互動請於 componentDidMount() 操作）
    render() {
        return (
            <div>Hello,{this.props.name}</div>
        )
    }
}

MyComponent.propTypes = {
    name: React.PropTypes.string
}
MyComponent.defaultProps = {
    name: ''
}

ReactDOM.render(<MyComponent name="Mark"/>, document.getElementById('app5'));

// 使用 arrow function 來設計 Functional Component 讓 UI 設計更單純（f(D) => UI），減少副作用（side effect）
const MyComponent2 = (props) => (
    <div>Hello, {props.name}</div>
)

MyComponent2.propTypes = {
    name: React.PropTypes.string
}
MyComponent2.defaultProps = {
    name: ''
}
ReactDOM.render(<MyComponent2 name="Mark"/>, document.getElementById('app6'));


class MyComponent3 extends React.Component {
    constructor(props) {
        super(props);
        console.log('constructor');
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            name: 'Mark'
        }
    }
    handleClick() {
        this.setState({
            'name': 'Zuck'
        })
    }
    componentWillMount() {
        console.log('componentWillMount')
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    componentWillReceviewProps() {
        console.log('componentWillReceviewProps')
    }
    componentWillUpdate() {
        console.log('componentWillUpdate');
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        return (
            <div onClick={this.handleClick}>Hi,{this.state.name}</div>
        )
    }
}
ReactDOM.render(<MyComponent3 name="Mark"/>, document.getElementById('app7'));
// 其中特殊處理的函數 shouldComponentUpdate，目前預設 return true。若你想要優化效能可以自己編寫判斷方式，若採用 immutable 可以使用 nextProps === this.props 比對是否有變動：

// shouldComponentUpdate(nextProps, nextState) {
//   return nextProps.id !== this.props.id;
// }

class UserGithub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            githubUrl: '',
            avatarUrl: ''
        }
    }
    componentDidMount() {
        jQuery.get(this.props.source, (result) => {
            console.log(result);
            const data = result;
            if (data) {
                this.setState({
                    username: data.name,
                    githubUrl: data.html_url,
                    avatarUrl: data.avatar_url
                })
            }
        })
    }
    render() {
        return (
            <div>
    			<h3>{this.state.username}</h3>
    			<img src={this.state.avatarUrl}/>
    			<p><a href={this.state.githubUrl}>Github link</a></p>
    		</div>
        )
    }
}

ReactDOM.render(
    <UserGithub source="https://api.github.com/users/cody1991"/>,
    document.getElementById('app8')
)
