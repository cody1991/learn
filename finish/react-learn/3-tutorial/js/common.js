// var data = [{
//     id: 1,
//     author: "Pete Hunt",
//     text: "This is one comment"
// }, {
//     id: 2,
//     author: "Jordan Walke",
//     text: "This is *another* comment"
// }]


var CommentBox = React.createClass({
    // getInitialState() executes exactly once during the lifecycle of the component and sets up the initial state of the component.
    getInitialState: function() {
        return {
            data: []
        }
    },
    loadCommentsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({
                    data: data
                })
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    handleCommentSubmit: function(comment) {

        var comments = this.state.data;
        comment.id = Date.now();

        var newComments = comments.concat([comment]);

        this.setState({
            data: newComments
        });


        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: 'POST',
            data: comment,
            success: function(data) {
                this.setState({
                    data: data
                })
            }.bind(this),
            error: function(xhr, status, err) {
                this.setState({
                    data: comments
                });
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },
    componentDidMount: function() {

        this.loadCommentsFromServer();

        // Here, componentDidMount is a method called automatically by React after a component is rendered for the first time. The key to dynamic updates is the call to this.setState(). We replace the old array of comments with the new one from the server and the UI automatically updates itself. Because of this reactivity, it is only a minor change to add live updates. We will use simple polling here but you could easily use WebSockets or other technologies.

        setInterval(this.loadCommentsFromServer, this.props.pollInterval);

    },
    // We pass some methods in a JavaScript object to React.createClass() to create a new React component. The most important of these methods is called render which returns a tree of React components that will eventually render to HTML.

    // The <div> tags are not actual DOM nodes; they are instantiations of React div components. You can think of these as markers or pieces of data that React knows how to handle. React is safe. We are not generating HTML strings so XSS protection is the default.

    // You do not have to return basic HTML. You can return a tree of components that you (or someone else) built. This is what makes React composable: a key tenet of maintainable frontends.
    render: function() {
        return (
            // Notice how we're mixing HTML tags and components we've built. HTML components are regular React components, just like the ones you define, with one difference. The JSX compiler will automatically rewrite HTML tags to React.createElement(tagName) expressions and leave everything else alone. This is to prevent the pollution of the global namespace.
            <div className = "commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data}/>    
                <CommentForm onCommentSubmit={this.handleCommentSubmit}/>        
            </div>
        );
    }
});
var CommentList = React.createClass({
    render: function() {
        // Now that we have defined the Comment component, we will want to pass it the author name and comment text. This allows us to reuse the same code for each unique comment. Now let's add some comments within our CommentList:
        // return (
        //     <div className="commentList">
        //         <Comment author="Pete Hunt">This is one comment</Comment>
        //         <Comment author="Hordan Walke">This is *another* comment</Comment>
        //     </div>
        // );

        var commentNodes = this.props.data.map(function(comment) {
            return (
                <Comment author={comment.author} key={comment.id}>
                 {comment.text}
                </Comment>
            )
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    // When a user submits a comment, we will need to refresh the list of comments to include the new one. It makes sense to do all of this logic in CommentBox since CommentBox owns the state that represents the list of comments.
    // We need to pass data from the child component back up to its parent. We do this in our parent's render method by passing a new callback (handleCommentSubmit) into the child, binding it to the child's onCommentSubmit event. Whenever the event is triggered, the callback will be invoked:
    getInitialState: function() {
        return {
            author: '',
            text: ''
        }
    },
    handleAuthorChange: function(e) {
        this.setState({
            author: e.target.value
        });
    },
    handleTextChange: function(e) {
        this.setState({
            text: e.target.value
        });
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || !author) {
            return;
        }

        // Now that CommentBox has made the callback available to CommentForm via the onCommentSubmit prop, the CommentForm can call the callback when the user submits the form:
        this.props.onCommentSubmit({
            author: author,
            text: text
        });


        this.setState({
            author: '',
            text: ''
        });
    },
    render: function() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" value={this.state.author} onChange={this.handleAuthorChange}/>
                <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.handleTextChange}/>
                <input type="submit" value="Post"/>
            </form>
        )
    }
});

var Comment = React.createClass({
    rawMarkup: function() {
        var rawMarkup = marked(this.props.children.toString(), {
            sanitize: true
        });
        return {
            __html: rawMarkup
        }
    },
    render: function() {
        // Let's create the Comment component, which will depend on data passed in from its parent. Data passed in from a parent component is available as a 'property' on the child component. These 'properties' are accessed through this.props. Using props, we will be able to read the data passed to the Comment from the CommentList, and render some markup:

        // We access named attributes passed to the component as keys on this.props and any nested elements as this.props.children.

        // Markdown is a simple way to format your text inline. For example, surrounding text with asterisks will make it emphasized.

        // In this tutorial we use a third-party library marked which takes Markdown text and converts it to raw HTML. We already included this library with the original markup for the page, so we can just start using it. Let's convert the comment text to Markdown and output it:

        // All we're doing here is calling the marked library. We need to convert this.props.children from React's wrapped text to a raw string that marked will understand so we explicitly call toString().

        // But there's a problem! Our rendered comments look like this in the browser: "<p>This is <em>another</em> comment</p>". We want those tags to actually render as HTML.

        // That's React protecting you from an XSS attack. There's a way to get around it but the framework warns you not to use it:
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />                
            </div>
        )
    }
});

// ReactDOM.render() instantiates the root component, starts the framework, and injects the markup into a raw DOM element, provided as the second argument.

// The ReactDOM module exposes DOM-specific methods, while React has the core tools shared by React on different platforms

// It is important that ReactDOM.render remain at the bottom of the script for this tutorial. ReactDOM.render should only be called after the composite components have been defined.

// ReactDOM.render(
//     <CommentBox data={data}/>,
//     document.getElementById('content')
// )

ReactDOM.render(
    <CommentBox url="/api/comments" pollInterval={2000}/>,
    document.getElementById('content')
)

// This component is different from the prior components because it will have to re-render itself. The component won't have any data until the request from the server comes back, at which point the component may need to render some new comments.