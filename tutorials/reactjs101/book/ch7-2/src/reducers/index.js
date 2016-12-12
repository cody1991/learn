import {
	combineReducers
} from 'redux-immutable';
import ui from './ui/uiReducers'; // import routes from './routes';
import todo from './data/todoReducers'; // import routes from './routes';

const rootReducer = combineReducers({
	todo,
});

export default rootReducer;