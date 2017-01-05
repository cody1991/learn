import React from 'react'
import {
	Link
} from 'react-router'

const HomePage = () => (
	<div className="jumbotron center">
		<h1 className="lead">
			Welcome to Media Library built with React,Redux, and Redux-saga
		</h1>
		<div>
			<Link to="library">
				<button className="btn btn-lg btn-primary">
					Visit Library
				</button>
			</Link>
		</div>
	</div>
)

export default HomePage