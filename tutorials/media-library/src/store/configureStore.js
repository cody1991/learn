import {
	createStore,
	applyMiddleware
} from 'redux'

import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

// Initialize your SagaMiddleWare. We’d discuss about sagas in the next step.
// Pass rootReducer and sagaMiddleware to the createStore function to create our redux store.
// Finally, we run our sagas. You can either spread them or wire them up to a rootSaga.

const configureStore = () => {
	const sagaMiddleware = createSagaMiddleware()

	return {
		...createStore(
			rootReducer,
			applyMiddleware(sagaMiddleware)),
		runSaga: sagaMiddleware.run(rootSaga)
	}
}

export default configureStore