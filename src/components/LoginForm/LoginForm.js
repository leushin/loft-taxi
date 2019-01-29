import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getIsAuthorized } from '../../modules/Auth';

class LoginForm extends Component {
    render () {
        const { isAuthorized } = this.props;
            
        return isAuthorized ? (
            <Redirect to="/app" />
        ) : (
           <div>2323</div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = { login };

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(LoginForm);
