var Counter = React.createClass({
    getInitialState: function() {
        return {
            clickCount: 0
        };
    },
    handleClcik: function() {
        // this.setState(function(state) {
        //     return {
        //         clickCount: state.clickCount + 1
        //     }
        // });
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    },
    render: function() {
        return (
            <h2 onClick={this.handleClcik}>Click me!Number of clicks:{this.state.clickCount}</h2>
        )
    }
});

ReactDOM.render(
    <Counter />,
    document.getElementById('example1')
);