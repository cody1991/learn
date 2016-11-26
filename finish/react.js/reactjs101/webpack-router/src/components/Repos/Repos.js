import React from 'react';

const Repos = (props) => (
    <div>
		<h3>Repos</h3>
		<h5>{props.params.name}</h5>
	</div>
)

Repos.propTypes = {
    params: React.PropTypes.object
}

export default Repos;
