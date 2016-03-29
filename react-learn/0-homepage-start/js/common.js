var HelloMessage = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>
    }
});

ReactDOM.render(
    <HelloMessage name="John" />,
    document.getElementById('example1')
);


var Timer = React.createClass({
    getInitialState: function() {
        console.log('getInitialState');
        return {
            secondsElapsed: 0
        };
    },
    tick: function() {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    },
    componentWillUnmount: function() {
        console.log('componentWillUnmount');
        clearInterval(this.interval);
    },
    componentDidMount: function() {
        console.log('componentDidMount');
        this.interval = setInterval(this.tick, 1000);
    },
    render: function() {
        return (
            <div>Seconds Elapsed:{this.state.secondsElapsed}</div>
        );
    }
});

ReactDOM.render(
    <Timer />,
    document.getElementById('example2')
);

var TodoList = React.createClass({
    render: function() {
        var createItem = function(item) {
            return <li key={item.id}>{item.text}</li>;
        }
        return <ul>{this.props.items.map(createItem)}</ul>;
    }
});

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            items: [],
            text: ''
        }
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var nextItems = this.state.items.concat([{
            text: this.state.text,
            id: Date.now()
        }]);
        var nextText = '';
        this.setState({
            items: nextItems,
            text: nextText
        })
    },
    onChange: function(e) {
        this.setState({
            text: e.target.value
        })
    },
    render: function() {
        return (
            <div>
                <h3>TODO</h3>
                <TodoList items={this.state.items} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.onChange} value={this.state.text} />
                    <button>{'Add #' + (this.state.items.length + 1)}</button>
                </form>
            </div>
        )
    }
});

ReactDOM.render(
    <TodoApp />,
    document.getElementById('example3')
);

var MarkdownEditor = React.createClass({
    getInitialState: function() {
        return {
            value: 'Type some *markdown* here'
        }
    },
    rawMarkup: function() {
        return {
            __html: marked(this.state.value, {
                sanitize: true
            })
        };
    },
    handleChange: function() {
        console.log(this.refs)
        this.setState({
            value: this.refs.textarea.value
        });
    },
    render: function() {
        return (
            <div className="MarkdownEditor">
                <h3>Input</h3>
                <textarea onChange={this.handleChange} ref="textarea" defaultValue={this.state.value} />
                <h3>Output</h3>
                <div className="content" dangerouslySetInnerHTML={this.rawMarkup()}/>
            </div>
        );
    }
});

ReactDOM.render(
    <MarkdownEditor />,
    document.getElementById('example4')
);