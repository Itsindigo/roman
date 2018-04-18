import { convertToRomanNumeral } from '../util/dataProcessing';
import { GET_ROMAN_NUMBER, SET_SEARCH_TERM } from './types';

function delay(t, v) {
    return new Promise(function(resolve) {
        setTimeout(resolve.bind(null, v), t)
    })
}

Promise.prototype.delay = function(t) {
    return this.then(function(v) {
        return delay(t, v);
    });
}

export const getRomanNumber = (searchTerm) => {
    return function(dispatch) {
        return Promise.resolve(convertToRomanNumeral(searchTerm))
        .delay(2000)
        .then(v => dispatch({
            type: GET_ROMAN_NUMBER,
            payload: v
        }));
    }
}

export const setSearchTerm = (searchTerm) => {
    return {
        type: SET_SEARCH_TERM,
        payload: searchTerm
    }
}