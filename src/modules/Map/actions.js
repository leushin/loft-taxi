import { createAction } from 'redux-actions';

export const fetchCoordsRequest = createAction('MAP/FETCH_ADDRESSES_REQUEST');
export const fetchCoordsSuccess = createAction('MAP/FETCH_ADDRESSES_SUCCESS');
export const fetchCoordsFailure = createAction('MAP/FETCH_ADDRESSES_FAILURE');

export const isOrderSet = createAction('MAP/IS_ORDER_SET');