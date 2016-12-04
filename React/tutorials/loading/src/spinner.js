import React, {
	Component
} from 'react'

import './spinner.css'
import Gif from './gif'

class Spinner extends Component {
	render() {

		if (!this.props.show) {
			return (
				<span></span>
			)
		}

		const size = this.props.size
		let ste = this.props.style

		if (size > 0) {
			ste.fontSize = size
		}

		let loading = (
			<div className="svg-loader" style={ste}>
				<svg width="1em" height="1em">
					<circle style={{stroke:this.props.color}}  
						cx="0.5em" 
						cy="0.5em" 
						r="0.45em"/>
				</svg>
			</div>
		)

		if (this.props.type !== 'svg') {
			loading = <Gif size={this.props.size}></Gif>
		}

		if (this.props.children) {
			loading = this.props.children
		}

		if (this.props.display === 'inline') {
			return loading
		}

		return (
			<div className="react-loading-spinner">
				<div className="loading-inner">
				{loading}
				<div className="alert-text">
					{this.props.text}
				</div>
				</div>
			</div>
		)
	}
}

Spinner.propTypes = {
	type: React.PropTypes.string,
	display: React.PropTypes.string,
	color: React.PropTypes.string,
	style: React.PropTypes.object,
	text: React.PropTypes.string,
	cls: React.PropTypes.string,
	show: React.PropTypes.bool
}

Spinner.defaultProps = {
	type: 'svg',
	style: {},
	color: '#9b59b6',
	text: 'loading...',
	cls: '',
	show: false
}

export default Spinner