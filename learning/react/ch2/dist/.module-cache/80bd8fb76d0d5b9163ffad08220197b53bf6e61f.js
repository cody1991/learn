(function() {
    var Divider = React.createClass({displayName: "Divider",
        render: function() {
            return (
            	React.createElement("div", {className: "divider"}, 
        			React.createElement("h2", null, "Question"), React.createElement("hr", null)
        		)
        	);
        }
    })
})();
