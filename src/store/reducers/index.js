import { combineReducers } from 'redux';
import tabsReducer from './tabsReducer';
import userReducer from './usersReducer';

export default combineReducers({
	tabsReducer,
	userReducer,
});
