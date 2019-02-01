import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { handleProfileSubmit, handleProfileClear } from './actions';

const wallet = handleActions({
	[handleProfileSubmit]: (_state, action) => action.payload,
	[handleProfileClear]: () => {},
}, {});

export default combineReducers({
	wallet,
});