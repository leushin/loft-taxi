import { createAction } from 'redux-actions';

export const fetchCoordsRequest = createAction('MAP/FETCH_COORDS_REQUEST');
export const fetchCoordsSuccess = createAction('MAP/FETCH_COORDS_SUCCESS');
export const fetchCoordsFailure = createAction('MAP/FETCH_COORDS_FAILURE');

export const setOrderComplete = createAction('MAP/SET_ORDER_COMPLETE');