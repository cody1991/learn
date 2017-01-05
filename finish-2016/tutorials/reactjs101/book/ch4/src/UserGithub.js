import React, {
	Component
} from 'react'

class UserGithub extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			githubUrl: '',
			avatarUrl: ''
		}
	}

	componentDidMount() {
		fetch(this.props.source)
			.then((result) => {
				return result.json()

			})
			.then((data) => {
				console.log(data)

				if (data) {
					this.setState({
						username: data.name,
						githubUrl: data.html_url,
						avatarUrl: data.avatar_url
					})
				}
			})
	}

	render() {
		return (
			<div className="UserGithub">
				<h3>{this.state.username}</h3>
				<img src={this.state.avatarUrl} alt=""/>
				<a href={this.state.githubUrl}>Github Link</a>
			</div>
		)
	}
}

export default UserGithub