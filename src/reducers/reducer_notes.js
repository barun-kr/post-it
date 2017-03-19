import { FETCH_NOTES } from '../actions/index';

const INITIAL_STATE = {all: [] };

export default function(state = INITIAL_STATE, action){
	switch(action.type){	
	case FETCH_NOTES:
		return { ...state, all: action.payload};	
	default:
		return state;
	}
}