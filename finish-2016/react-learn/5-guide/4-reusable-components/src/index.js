var React = require('react'),
    ReactDOM = require('react-dom');


React.createClass({
    propTypes: {
        // 可以声明 prop 为指定的 JS 基本类型。默认
        // 情况下，这些 prop 都是可传可不传的。
        optionalArray: React.PropTypes.array,
        optionalBool: React.PropTypes.bool,
        optionalFunc: React.PropTypes.func,
        optionalNumber: React.PropTypes.number,
        optionalObject: React.PropTypes.object,
        optionalString: React.PropTypes.string,

        // 所有可以被渲染的对象：数字，
        // 字符串，DOM 元素或包含这些类型的数组。
        optionalNode: React.PropTypes.node,

        // React 元素
        optionalElement: React.PropTypes.element,

        // 用 JS 的 instanceof 操作符声明 prop 为类的实例。
        // optionalMessage: React.PropTypes.instanceof(Message),

        // 用 enum 来限制 prop 只接受指定的值。
        optionalEnum: React.PropTypes.oneOf(['News', 'Photos']),

        // 指定的多个对象类型中的一个
        optionalUnion: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
            // React.PropTypes.instanceof(Message)
        ]),

        // 指定类型组成的数组
        optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number),

        // 指定类型的属性构成的对象
        optionalObjectOf: React.PropTypes.objectOf(React.PropTypes.number),

        // 特定形状参数的对象
        optionalObjectWithShape: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),

        // 以后任意类型加上 `isRequired` 来使 prop 不可空。
        requiredFunc: React.PropTypes.func.isRequired,

        // 不可空的任意类型
        requiredAny: React.PropTypes.any.isRequired,

        // 自定义验证器。如果验证失败需要返回一个 Error 对象。不要直接
        // 使用 `console.warn` 或抛异常，因为这样 `oneOfType` 会失效。
        customProp: function(props, propName, componentName) {
            if (!/matchme/.test(props[propName])) {
                return new Error('Validation failed!');
            }
        }
    },
    render: function() {

    }
});


// var ComponentWithDefaultProps = React.createClass({
//     getDefaultProps: function() {
//         return {
//             value: 'default value'
//         };
//     }
// });

// 父级没有传入 props 时，getDefaultProps() 可以保证 this.props.value 有默认值，注意 getDefaultProps 的结果会被 缓存。得益于此，你可以直接使用 props，而不必写手动编写一些重复或无意义的代码。

var CheckLink = React.createClass({
    render: function(){
        return (
            <a {...this.props}>{'√ '}{this.props.children}</a>
        )
    }
});

ReactDOM.render(
    <CheckLink href="/checked.html" className="check-link">
        Click here!
    </CheckLink>,
    document.getElementById('example')
);

var SetIntervalMixin = {
    componentWillMount:function(){
        this.intervals = [];
    },
    setInterval:function(){
        this.intervals.push(setInterval.apply(null,arguments));
    },
    componenntWillUnmount:function(){
        this.intervals.map(clearInterval);
    }
}

var TickTock = React.createClass({
    mixins:[SetIntervalMixin],
    getInitialState:function(){
        return{
            seconds:0
        }
    },
    componentDidMount:function(){
        this.setInterval(this.tick,1000);
    },
    tick:function(){
        this.setState({
            seconds:this.state.seconds + 1
        })
    },
    render:function(){
        return (
            <p>
                React has been running for {this.state.seconds}  seconds.
            </p>
        )
    }
})

React.render(
    <TickTock />,
    document.getElementById('example2')
)