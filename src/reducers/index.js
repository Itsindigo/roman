import { combineReducers } from 'redux';
import romanNumberReducer from './romanNumberReducer';

const initialState = {
    romanNumber: null
}


const rootReducer = combineReducers({
    romanNumber: romanNumberReducer
})

export default rootReducer