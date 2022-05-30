// It is a function that takes a piece of state that has to do with alerts and action
// and Action is going to be dispatch from an action file
import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = [];

export default function(state = initialState, action) {
    //destructure is used 
    const { type, payload } = action;

    switch(type){
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }
    
}
//We dispatch set_alert and return the array with the payload
//with a new alert. 
//remove is going to filter and return all alerts expect for the one that matches of the payload.