import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { getIsAuthorized } from '../../modules/Auth';

class PrivateRoute extends PureComponent {
    renderRoute = props => {
        const { isAuthorized, component: Component } = this.props;
        return isAuthorized ? <Component {...props} /> : <Redirect to="/" />;
    };
    
    render() {
        const { isAuthorized, component, ...rest } = this.props;
        return <Route {...rest} render={this.renderRoute} />;
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
