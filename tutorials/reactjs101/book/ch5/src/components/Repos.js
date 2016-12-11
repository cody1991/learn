import React, {
	Component
} from 'react'

class Repos extends Component {
	render() {
		return (
			<div className="repos">
				Repos
				<h5>{this.props.params.name}</h5>
			</div>
		)
	}
}

Repos.propTypes = {
	params: React.PropTypes.object
}

export default Repos