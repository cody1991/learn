(function() {
    var Divider = React.createClass({
        render: function() {
            return (
                <div className = "divider">
        			<h2>{this.props.children}</h2><hr />
        		</div>
            );
        }
    });

    React.render(
        <Divider>Hello React!</Divider>,
        document.getElementById('demo')
    )
})();
