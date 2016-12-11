import * as types from '../constants/actionTypes'

// Returns an action type, SELECTED_IMAGE and the image selected

export const selectImageAction = (image) => ({
	type: types.SELECTED_IMAGE,
	image
})

export const selectVideoAction = (video) => ({
	type: types.SELECTED_VIDEO,
	video
})

export const serchMediaAction = (payload) => ({
	type: types.SEARCH_MEDIA_REQUEST,
	payload
})