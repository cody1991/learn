import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import About from './About'
import Repos from './Repos'
import Repo from './Repo'
import Home from './Home'
import './index.css';

import {
	Router,
	Route,
	hashHistory,
	IndexRoute,
	browserHistory
} from 'react-router'


ReactDOM.render(
	(<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home}/>
			<Route path='repos' component={Repos}>
				<Route path='/repos/:userName/:repoName' component={Repo}/>
			</Route>
			<Route path='/about' component={About}/>
		</Route>
	</Router>),
	document.getElementById('root')
);