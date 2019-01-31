import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { handleProfileSubmit, handleProfileClear } from './actions';

const wallet = handleActions({
	[handleProfileSubmit]: (_state, action) => action.payload,
	[handleProfileClear]: () => {},
}, {});

export default combineReducers({
	wallet,
})

export const getProfile = state => state.profile.wallet;
export const getIsProfileFilled = state =>  Object.keys(state.profile.wallet).length > 0;