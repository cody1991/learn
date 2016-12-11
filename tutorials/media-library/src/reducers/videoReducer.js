import initialState from './initialState'
import * as types from '../constants/actionTypes'

// create-react-app comes preinstalled with babel-plugin-transform-object-rest-spread that lets you use the spread (…) operator to copy enumerable properties from one object to another in a succinct way.

// For context, { …state, videos: action.videos } evaluates to Object.assign({}, state, action.videos).

// Since reducers don’t mutate state, you would always find yourself using spread operator, to make and update the new copy of the current state tree.

// So, When the reducer receives SELECTED_VIDEO action type, it returns a new copy of the state tree by spreading it(…state) and updating the selectedVideo property.
export default function(state = initialState.videos, action) {
	switch (action.type) {
		case types.SHUTTER_VIDEOS_SUCCESS:
			return [...state, action.videos]
		case types.SELECTED_VIDEO:
			return {
				...state,
				selectedVideo: action.video
			}
		default:
			return state
	}
}