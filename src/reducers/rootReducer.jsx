import { combineReducers } from 'redux';
import userReducer from './userReducer';
import quotesReducer from './quotesReducer';
import authReducer from './authReducer';
import orgReducer from './orgReducer';

const rootReducer = combineReducers({
    user: userReducer,
    quotes: quotesReducer,
    auth: authReducer,
    org: orgReducer
});

export default rootReducer;