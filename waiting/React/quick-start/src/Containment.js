import React, {
	Component
} from 'react';

function Dialog(props) {
	return (
		<FancyBorder color="blue">
			<h1 className="dialog-title">
				{props.title}
			</h1>
			<p className="dialog-message">
				{props.message}
			</p>
			{props.children}
		</FancyBorder>
	)
}

function FancyBorder(props) {
	return (
		<div className={'FancyBorder FancyBorder-' + props.color}>
			{props.children}
		</div>
	)
}

function SplitPane(props) {
	return (
		<div className="SplitPane">
			<div className="splitpane-left">
				{props.left}
			</div>
			<div className="splitpane-right">
				{props.right}
			</div>
		</div>
	)
}

class SignUpDialog extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
	}

	handleChange(e) {
		this.setState({
			login: e.target.value
		});
	}

	handleSignUp() {
		console.log(`Welcome aboard,${this.state.login}!`)
	}

	render() {
		return (
			<Dialog title="Mars Exploration Program"
					message="How should we refer to you?">
				<input value={this.state.login} onChange={this.handleChange}/>
				<button onClick={this.handleSignUp}>
				Sign me up!</button>
			</Dialog>
		)
	}
}

class Containment extends Component {
	render() {
		return (
			<div className="containment">
				<FancyBorder color="blue">
					<h1 className="dialog-title">
						Welcome
					</h1>
					<p>
						Thank you
					</p>
				</FancyBorder>
				<hr/>
				<SplitPane left={
					<p>1</p>
				} right={
					<p>2</p>
				} />
				<hr/>
				<Dialog title="welcome" message="thank you">
					<span>self</span>
				</Dialog>
				<hr/>
				<SignUpDialog/>
			</div>
		)
	}
}

export default Containment;