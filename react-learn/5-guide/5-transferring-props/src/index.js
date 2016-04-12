var React = require('react'),
    ReactDOM = require('react-dom');

var FancyCheckbox = React.createClass({
    render: function() {
        var fancyClass = this.props.checked ? 'FancyChecked' : 'FancyUnchecked';
        return (
            <div className={fancyClass} {...this.props}>
                {this.props.children}
            </div>
        )
    }
});


ReactDOM.render(
    <FancyCheckbox checked={true} onClick={console.log.bind(console)} id="fancy">
        Hello world!
    </FancyCheckbox>,
    document.getElementById('example')
);

// 如果组件需要使用一个属性又要往下传递，可以直接使用 checked={checked} 再传一次。