import React from 'react'
import ReactDOM from 'react-dom'
import {
	Router,
	browserHistory
} from 'react-router'
import routes from './routes'

// We pass in our routes and browserHistory as props to Router here. browserHistory uses your browser’s History API to create a clean and real URL without the gibberish that comes with using hashHistory. hashHistory has its use case, though.

// Router is a high-level API that keeps your UI and URL in sync. It ensures that required props are passed whenever you change URL.

// ReactDOM is the API for mounting our application on the DOM node(root, in our own case).

ReactDOM.render(
	<Router history={browserHistory} routes={routes}/>,
	document.getElementById('root')
)