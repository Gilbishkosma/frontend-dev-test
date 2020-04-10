import { combineReducers } from 'redux';
import { ADD_PLAYERS } from '../constants/action_types'

const initialState = {
	players:{player1:'',player2:''}
}



let baseReducer = (state = initialState, action) => {
	console.log(action)
	switch(action.type){
		case ADD_PLAYERS:
			return  {...state,players:action.payload}
		default:
			return state
	}  
}

export default combineReducers({
    baseReducer
});