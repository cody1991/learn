var React = require('react'),
    ReactDOM = require('react-dom');

// React.initializeTouchEvents(true);
console.log(React);
console.log(ReactDOM);

var LikeButton = React.createClass({
    getInitialState: function() {
        return {
            liked: false
        }
    },
    handleClick: function(event) {
        this.setState({
            liked: !this.state.liked
        })
    },
    render: function() {
        var text = this.state.liked ? 　'like' : 'haven\'t liked';
        return (
            <p onClick={this.handleClick}>
                Your {text} this. Click to toggle;
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.getElementById('example')
);

// 计算所得数据： 不要担心根据 state 来预先计算数据 —— 把所有的计算都放到 render() 里更容易保证用户界面和数据的一致性。例如，在 state 里有一个数组（listItems），我们要把数组长度渲染成字符串， 直接在 render() 里使用 this.state.listItems.length + ' list items' 比把它放到 state 里好的多。
// React 组件： 在 render() 里使用当前 props 和 state 来创建它。
// 基于 props 的重复数据： 尽可能使用 props 来作为惟一数据来源。把 props 保存到 state 的一个有效的场景是需要知道它以前值的时候，因为未来的 props 可能会变化。