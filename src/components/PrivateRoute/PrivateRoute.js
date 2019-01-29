import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
    render () {
        const { component: RouteComponent, isAuthorized, ...rest } = this.props;

        return (
            <Route
                {...rest}
                render={routeProps => (
                    isAuthorized ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                        <Redirect to="/" />
                    )
                )}
            />
        );
    }
}

export default withAuth(PrivateRoute);
