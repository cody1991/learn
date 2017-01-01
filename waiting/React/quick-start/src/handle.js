import React, {
	Component
} from 'react';

class Handle extends Component {
	constructor(props) {
		super(props);
		this.state = {
				isToggleOn: true
			}
			// This binding is necessary to make `this` work in the callback
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState((preveState) => ({
			isToggleOn: !preveState.isToggleOn
		}));
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}
export default Handle