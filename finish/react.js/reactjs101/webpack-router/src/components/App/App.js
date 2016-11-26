import React from 'react';
import styles from './appStyles';
import { Link, IndexLink } from 'react-router';
import NavLink from '../NavLink'

const App = (props) => (
    <div>
		<h1>React Router Tutorial</h1>
		<ul>
			<li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
			<li><Link to="/about" activeStyle={{color:'green'}}>About</Link></li>
			<li><Link to="/repos/react-router" activeStyle={styles.active}>Repos</Link></li>
			<li><Link to="/user" activeClassName="active">User</Link></li>
			<li><NavLink to="/contacts">Contacts</NavLink></li>
		</ul>
		{props.children}
	</div>
)

App.proTypes = {
    children: React.PropTypes.object
}

export default App;
