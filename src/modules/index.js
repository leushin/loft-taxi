import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';
import { reducer as formReducer } from 'redux-form';
import auth from './Auth';

export default combineReducers({ auth, form: formReducer });

export function* rootSaga() {
	//yield fork(followersSagas);
	//yield fork(userSagas);
}