import React, {
	Component
} from 'react';

function UserGreeting(props) {
	return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
	return <h1>Please sign up.</h1>
}

function LoginButton(props) {
	return (
		<button onClick={props.onClick}>
			Login
		</button>
	)
}

function LogoutButton(props) {
	return (
		<button onClick={props.onClick}>
			Logout
		</button>
	)
}

function Greeting(props) {
	const isLogginIn = props.isLogginIn;
	if (isLogginIn) {
		return <UserGreeting/>
	} else {
		return <GuestGreeting/>
	}
}

class LoginControl extends Component {
	constructor(props) {
		super(props);

		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = {
			isLogginIn: false
		}
	}

	handleLogoutClick() {
		this.setState({
			isLogginIn: false
		});
	}

	handleLoginClick() {
		this.setState({
			isLogginIn: true
		});
	}

	render() {

		const isLogginIn = this.state.isLogginIn;
		let button = null;

		if (isLogginIn) {
			button = <LogoutButton onClick={this.handleLogoutClick}/>
		} else {
			button = <LoginButton onClick={this.handleLoginClick}/>
		}
		return (
			<div className="login-control">
				<Greeting isLogginIn={isLogginIn}/>
				{button}
			</div>
		)
	}
}

export default LoginControl;