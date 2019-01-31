import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import auth from './Auth';
import map from './Map';
import profile from './Profile';

export default combineReducers({ auth, map, profile, form: formReducer });

export function* rootSaga() {
	//yield fork(followersSagas);
	//yield fork(userSagas);
}