import {
	combineReducers
} from 'redux'

import images from './imageReducer'
import videos from './videoReducer'

// We import combineReducers from Redux. CombineReducers is a helper function that combines our images and videos reducers into a single reducer function that we can now pass to the creatorStore function.

const rootReducer = combineReducers({
	images,
	videos
})

export default rootReducer