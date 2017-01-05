import React, {
	Component
} from 'react'

import {
	flickrImages,
	shutterStockVideos
} from '../Api/api'

class MediaGalleryPage extends Component {
	componentDidMount() {
		flickrImages('rain').then(images => console.log(images))

		shutterStockVideos('rain').then(videos =>
			console.log(videos))
	}
	render() {
		return (
			<div></div>
		)
	}
}

export default MediaGalleryPage