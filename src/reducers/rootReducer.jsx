import { combineReducers } from 'redux';
import userReducer from './userReducer';
import quotesReducer from './quotesReducer';
import authReducer from './authReducer';
import orgReducer from './orgReducer';
import addOrgReducer from './addOrgReducer';

const rootReducer = combineReducers({
    user: userReducer,
    quotes: quotesReducer,
    auth: authReducer,
    org: orgReducer,
    addOrg: addOrgReducer,
});

export default rootReducer;