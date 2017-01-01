import React, {
	Component
} from 'react';

import FormattedDate from './formattedDate.js'

class Clock extends Component {
	constructor(props) {
		super(props);
		this.state = {
			date: new Date()
		}
	}

	componentDidMount() {
		this.timerID = setInterval(
			() => this.tick(),
			1000
		)
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<FormattedDate date={this.state.date}/>
			</div>
		)
	}
}

// React may batch multiple setState() calls into a single update for performance.

// Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.

// For example, this code may fail to update the counter:

// Wrong
// this.setState({
//   counter: this.state.counter + this.props.increment,
// });

// To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Correct
// this.setState((prevState, props) => ({
//   counter: prevState.counter + props.increment
// }));
export default Clock;