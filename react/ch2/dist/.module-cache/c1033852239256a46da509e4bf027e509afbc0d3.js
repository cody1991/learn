(function() {
    var Divider = React.createClass({displayName: "Divider",
        render: function() {
            return (
                React.createElement("div", {className: "divider"}, 
        			React.createElement("h2", null, "this.props.children"), React.createElement("hr", null)
        		)
            );
        }
    });

    React.render(
        React.createElement(Divider, null, "Hello React!"),
        document.getElementById('demo')
    )
})();
