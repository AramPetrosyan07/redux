import { combineReducers } from 'redux'
import { textReducer } from './textReducer'

const reducers = {
    textReducer,
}

const rootReducer = combineReducers(reducers);

export default rootReducer;