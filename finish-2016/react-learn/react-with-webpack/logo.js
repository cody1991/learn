require('./logo.css');

var React = require('react'),
    ReactDOM = require('react-dom');

var Logo = React.createClass({
    render: function() {
        return <img className="logo" src={require('./logo.jpg')} />
    }
});

module.exports = Logo;
