import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from '../LoginForm';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route path="/login" exact component={LoginForm} />
            <Redirect from="*" to="/login" />
        </Switch>
    </BrowserRouter>
);
