import React, {
	Component
} from 'react';

function Welcome(props) {
	return (
		<h1>Hello, {props.name}</h1>
	)
}

const element = <Welcome name="Sara"/>

function formatName(user) {
	return user.firstName + ' ' + user.lastName;
}

const user = {
	firstName: 'tang',
	lastName: 'cody'
};

// const element = (

// )

class Helloworld extends Component {
	render() {
		return (
			<div className="hello" tabIndex="2">
				<p>age is {this.props.age}</p>
				Hello, {formatName(user)} !
				<hr/>
				{element}
			</div>
		);
	}
}

export default Helloworld