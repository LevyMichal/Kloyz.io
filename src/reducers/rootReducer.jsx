import { combineReducers } from 'redux';
import userReducer from './userReducer';
import quotesReducer from './quotesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    user: userReducer,
    quotes: quotesReducer,
    auth: authReducer,
});

export default rootReducer;