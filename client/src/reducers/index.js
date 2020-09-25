import { combineReducers } from 'redux';
import userReducer from './userReducer';
import courseReducer from './courseReducer'

export default combineReducers({
    user: userReducer,
    course: courseReducer
})