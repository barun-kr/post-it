import { combineReducers } from 'redux';
import NoteReducer from './reducer_notes';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
	notes: NoteReducer,
	form: formReducer
});

export default rootReducer;
