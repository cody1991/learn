import React, {
	Component
} from 'react';

import UserInfo from './userinfo.js';

function formatDate(date) {
	return date.toLocaleDateString();
}

class Comment extends Component {
	render() {
		return (
			<div className="comment">
				<UserInfo user={this.props.author}/>
				<div className="comment-text">
					{this.props.text}
				</div>
				<div className="comment-date">
					{formatDate(this.props.date)}
				</div>
			</div>
		);
	}
}

export default Comment