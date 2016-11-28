import React, {
	Component
} from 'react';

function WarningBanner(props) {
	if (!props.warn) {
		// In rare cases you might want a component to hide itself even though it was rendered by another component. To do this return null instead of its render output.
		return null
	}
	return (
		<div className="warning-banner">
			Warning!
		</div>
	)
}

class Warning extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showWarning: true
		}

		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	handleToggleClick() {
		this.setState((prevState) => ({
			showWarning: !prevState.showWarning
		}))
	}

	render() {
		return (
			<div className="warning">
				<WarningBanner warn={this.state.showWarning}/>
				<button onClick={this.handleToggleClick}>
					{this.state.showWarning ? 'Hide' : 'Show'}
				</button>
			</div>
		)
	}
}

export default Warning