import { combineReducers } from 'redux';
import { spawn } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import auth from './Auth';
import map from './Map';
import profile from './Profile';
import addresses from './Addresses';
import { authWatcher } from './Auth/sagas';
import { loadAddressesWatcher } from './Addresses/sagas';
import { getCoordsWatcher } from './Map/sagas';
//import {handleLocalStorageSaga} from './localStorageSaga';

export default combineReducers({ auth, map, profile, addresses, form: formReducer });

export function* rootSaga() {
    yield spawn(authWatcher)
    yield spawn(loadAddressesWatcher)
    yield spawn(getCoordsWatcher)
    //yield spawn(handleLocalStorageSaga)
}