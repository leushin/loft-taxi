import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchAddressesRequest, fetchAddressesSuccess, fetchAddressesFailure } from './actions';

const adresses = handleActions({
	[fetchAddressesSuccess]: () => (_state, action) => action.payload,
}, []);

const isLoadingAddresses = handleActions({
	[fetchAddressesRequest]: () => true,
	[fetchAddressesSuccess]: () => false,
    [fetchAddressesFailure]: () => false,
}, null);

const error = handleActions({
	[fetchAddressesSuccess]: () => null,
    [fetchAddressesFailure]: (_state, action) => action.payload,
}, null);

const errorText = handleActions({
    [fetchAddressesFailure]: () => 'Ошибка загрузки',
}, null);

export default combineReducers({
	adresses,
	isLoadingAddresses,
    error,
    errorText
});
