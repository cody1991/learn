const FLICKR_API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226';
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578';

const basicAuth = () => 'Basic '.concat(window.btoa(`${ SHUTTER_CLIENT_ID }:${ SHUTTER_CLIENT_SECRET }`))

// Basic Authentication for accessing Shutterstock API
const authParameters = {
	headers: {
		Authorization: basicAuth()
	}
}

/**
 * Description [Access Shutterstock search endpoint for short videos]
 * @params { String } searchQuery
 * @return { Array } 
 */

export const shutterStockVideos = (searchQuery) => {
	const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?query=${searchQuery}&page=1&per_page=10`

	return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
		.then(response => {
			return response.json()
		})
		.then(json => {
			// console.log(json)
			return json.data.map(({
				id,
				assets,
				description
			}) => ({
				id,
				mediaUrl: assets.preview_mp4.url,
				description
			}))
		})
}


/**
 * Description [Access Flickr search endpoint for photos]
 * @params { String } searchQuery
 * @return { Array } 
 */

export const flickrImages = (searchQuery) => {
	const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photos.search&text=${searchQuery}&api_key=${FLICKR_API_KEY}&format=json&nojsoncallback=1&per_page=10`

	return fetch(FLICKR_API_ENDPOINT)
		.then(response => {
			return response.json()
		})
		.then(json => {
			// console.log(json)
			return json.photos.photo.map(({
				farm,
				server,
				id,
				secret,
				title
			}) => ({
				id,
				title,
				mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`

			}))
		})
}

// We’re using fetch method from fetch API for our AJAX request. It returns a promise that resolves to the response of such request. We simply format the response of our call using ES6 destructuring assignment before returning to the store.