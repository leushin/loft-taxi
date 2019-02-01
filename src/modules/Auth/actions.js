import { createAction } from 'redux-actions';

export const login = createAction('AUTH/LOGIN');
export const logout = createAction('AUTH/LOGOUT');
export const testAuth = createAction('TEST_AUTH');