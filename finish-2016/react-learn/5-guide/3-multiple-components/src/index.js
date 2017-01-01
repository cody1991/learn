var React = require('react'),
    ReactDOM = require('react-dom');

var Avatar = React.createClass({
    render: function() {
        return (
            <div>
                <PagePic pagename={this.props.pagename} />
                <PageLink pagename={this.props.pagename} />
            </div>
        );
    }
});

var PagePic = React.createClass({
    render: function() {
        return (
            <img src={'https://graph.facebook.com/' + this.props.pagename + '/picture'} />
        )
    }
});

var PageLink = React.createClass({
    render: function() {
        return (
            <a href={'https://www.facebook.com/' + this.props.pagename}>
                {this.props.pagename}
            </a>
        )
    }
});

ReactDOM.render(
    <Avatar pagename="Engineering" />,
    document.getElementById('example')
);

// Parent 能通过专门的 this.props.children props 读取子级。this.props.children 是一个不透明的数据结构： 通过 React.Children 工具类 来操作。

// 如果子组件位置会改变（如在搜索结果中）或者有新组件添加到列表开头（如在流中）情况会变得更加复杂。如果子级要在多个渲染阶段保持自己的特征和状态，在这种情况下，你可以通过给子级设置惟一标识的 key 来区分。

// render: function() {
//    var results = this.props.results;
//    return (
//      <ol>
//        {results.map(function(result) {
//          return <li key={result.id}>{result.text}</li>;
//        })}
//      </ol>
//    );
//  }

// 当 React 校正带有 key 的子级时，它会确保它们被重新排序（而不是破坏）或者删除（而不是重用）。 务必 把 key 添加到子级数组里组件本身上，而不是每个子级内部最外层 HTML 上：

// // 错误！
// var ListItemWrapper = React.createClass({
//   render: function() {
//     return <li key={this.props.data.id}>{this.props.data.text}</li>;
//   }
// });
// var MyComponent = React.createClass({
//   render: function() {
//     return (
//       <ul>
//         {this.props.results.map(function(result) {
//           return <ListItemWrapper data={result}/>;
//         })}
//       </ul>
//     );
//   }
// });

// // 正确 :)
// var ListItemWrapper = React.createClass({
//   render: function() {
//     return <li>{this.props.data.text}</li>;
//   }
// });
// var MyComponent = React.createClass({
//   render: function() {
//     return (
//       <ul>
//         {this.props.results.map(function(result) {
//            return <ListItemWrapper key={result.id} data={result}/>;
//         })}
//       </ul>
//     );
//   }
// });

// 也可以传递 object 来做有 key 的子级。object 的 key 会被当作每个组件的 key。但是一定要牢记 JavaScript 并不总是保证属性的顺序会被保留。实际情况下浏览器一般会保留属性的顺序，除了 使用 32位无符号数字做为 key 的属性。数字型属性会按大小排序并且排在其它属性前面。一旦发生这种情况，React 渲染组件的顺序就是混乱。可能在 key 前面加一个字符串前缀来避免：

 // render: function() {
 //    var items = {};

 //    this.props.results.forEach(function(result) {
 //      // 如果 result.id 看起来是一个数字（比如短哈希），那么
 //      // 对象字面量的顺序就得不到保证。这种情况下，需要添加前缀
 //      // 来确保 key 是字符串。
 //      items['result-' + result.id] = <li>{result.text}</li>;
 //    });

 //    return (
 //      <ol>
 //        {items}
 //      </ol>
 //    );
 //  }