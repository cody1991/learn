var React = require('react'),
    ReactDOM = require('react-dom');


// To render a React Component, just create a local variable that starts with an upper-case letter:
var HelloWorld = React.createClass({
    render: function() {
        return (
            <p>
                Hello,<input type="text" placeholder="Your name here" />!
                It is {this.props.data.toTimeString()}
            </p>
        );
    }
});


setInterval(function() {
    var myDivElement2 = <HelloWorld data={new Date()} />
    ReactDOM.render(
        myDivElement2,
        document.getElementById('example')
    );
});

// To render an HTML tag, just use lower-case tag names in JSX:
var myDivElement = <div className="foo"/>;
ReactDOM.render(myDivElement, document.getElementById('example2'));