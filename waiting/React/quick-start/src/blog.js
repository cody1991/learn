import React, {
	Component
} from 'react';

class Blog extends Component {

	render() {
		const sidebar = (
			<ul>
				{this.props.posts.map((post)=>(
					<li key={post.id}>
						{post.title}
					</li>
				))}
			</ul>
		);


		const content = this.props.posts.map((post) => (
			<div key={post.id}>
				<h3>{post.title}</h3>
				<p>{post.content}</p>
			</div>
		));

		return (
			<div className="Blog">
				{sidebar}
				<hr/>
				{content}
			</div>
		)
	}
}

export default Blog;