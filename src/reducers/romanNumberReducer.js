import { GET_ROMAN_NUMBER, SET_SEARCH_TERM } from '../actions/types';

const initialState = {
    value: 'initial state',
    searchTerm: ''
}

export default function(state=initialState, action) {
    switch(action.type) {
        case GET_ROMAN_NUMBER:
            return {
                ...state,
                value: action.payload
            }
        case SET_SEARCH_TERM:
            return {
                ...state,
                searchTerm: action.payload
            }
        default:
            return state
    }
}