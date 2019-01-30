import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm';
import PrivateRoute from '../PrivateRoute';
import Map from '../Map';
import Profile from '../Profile';
import Menu from '../Menu';

export default () => (
    <BrowserRouter>
        <Menu />
        <Switch>
            <Route path='/login' exact component={LoginForm} />
            <PrivateRoute path={'/map'} component={Map}/>
            <PrivateRoute path={'/profile'} component={Profile}/>
            <Redirect from='*' to='/login' />
        </Switch>
    </BrowserRouter>
);
