import { combineReducers } from 'redux';
import { GET_ROMAN_NOTATION } from './actions/index';

const initialState = {
    romanNumber: null
}


function getRomanNotation(state=initialState, action) {
    switch (action.type) {
        case GET_ROMAN_NOTATION:
            return Object.assign({}, state, {
                romanNumber: action.romanNumber,
            })
        default:
            return state
    }
}



const romanApp = combineReducers({
    getRomanNotation
})

export default romanApp