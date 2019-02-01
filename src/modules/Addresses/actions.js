import { createAction } from 'redux-actions';

export const fetchAddressesRequest = createAction('ADRESSES/FETCH_ADDRESSES_REQUEST');
export const fetchAddressesSuccess = createAction('ADRESSES/FETCH_ADDRESSES_SUCCESS');
export const fetchAddressesFailure = createAction('ADRESSES/FETCH_ADDRESSES_FAILURE');
