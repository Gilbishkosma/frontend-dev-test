import { ADD_PLAYERS } from '../constants/action_types';



export const addPlayers = payload => {
	return {type:ADD_PLAYERS,payload}
}
