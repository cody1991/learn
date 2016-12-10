import React from 'react'
import {
	Link,
	IndexLink
} from 'react-router'

// Link allows you navigate to different routes in your application.

// IndexLink is the same as Link with the exception of OnlyActiveOnIndex prop set on it.
const Header = () => (

	<header>
	<nav className="navbar navbar-inverse">
			<ul className="nav navbar-nav">
				<li>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>					
				</li>
				<li>
			<Link to="library" activeClassName="active">Library</Link>
				</li>
			</ul>
		</nav> 
	</header>
)

export default Header