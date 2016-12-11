import React from 'react'

class Repo extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.params.userName}</p>
				<p>{this.props.params.repoName}</p>
			</div>
		)
	}
}

export default Repo