// webpack：会在开发模式下开始一次性的建置
// webpack -p：会建置 production 的程式码
// webpack --watch：会监听程式码的修改，当储存时有异动时会更新档案
// webpack -d：加入 source maps 档案
// webpack --progress --colors：加上处理进度与颜色

import React from 'react';
import ReactDom from 'react-dom';

const divStyle = {
    color: 'red',
}
const lists = ['JavaScript', 'Java', 'Node'];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div>
            	<h1 style={divStyle}>Hello, World!</h1> 
            	<ul>
            		{lists.map((result,index)=>{
            			return (<li key={index}>{result}</li>)
            		})}
            	</ul>
            </div>
        )
    }
}

App.propTypes = {
    todo: React.PropTypes.object,
    name: React.PropTypes.string
}

App.defaultProps = {
    todo: {},
    name: ''
}

// const App = () => (
//     <div>Hello,world!</div>
// )

ReactDom.render(<App />, document.getElementById('app'));
