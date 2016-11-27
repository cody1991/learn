import React, {
	Component
} from 'react';


class FormattedDate extends Component {
	render() {
		return (
			<h2>It is {this.props.date.toLocaleTimeString()}.</h2>
		);
	}
}

export default FormattedDate