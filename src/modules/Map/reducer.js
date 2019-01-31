import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchCoordsRequest, fetchCoordsSuccess, fetchCoordsFailure, isOrderSet } from './actions';

const isLoadingCoords = handleActions({
	[fetchCoordsRequest]: () => true,
	[fetchCoordsSuccess]: () => false,
	[fetchCoordsFailure]: () => false,
}, false);

const coords = handleActions({
	[fetchCoordsRequest]: () => null,
	[fetchCoordsSuccess]: (_state, action) => action.payload,
	[fetchCoordsFailure]: () => null,
}, null);

const error = handleActions({
	[fetchCoordsRequest]: () => null,
	[fetchCoordsSuccess]: () => null,
	[fetchCoordsFailure]: (_state, action) => action.payload,
}, null);

export default combineReducers({
	isLoadingCoords,
	coords,
	error
})

export const getCoords = state => state.map.coords;
export const getIsOrderMade = state => state.map.isOrderMade;