import React, {
	Component
} from 'react';

class UserInfo extends Component {
	render() {
		return (
			<div className="userInfo">
				<img src={this.props.user.avatarUrl} alt={this.props.user.name} className="avatar"/>
				<div className="userInfo-name">
					{this.props.user.name}
				</div>
			</div>
		)
	}
}

export default UserInfo;