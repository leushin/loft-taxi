import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login, getIsAuthorized } from '../../modules/Auth';
import { Field, reduxForm } from 'redux-form';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { renderTextField } from '../../helpers';
import styles from './LoginFormStyles.js'
import { withStyles } from '@material-ui/core/styles';

const validate = ({ login, password }) => {
    const errors = {};
    if (login !== 'test@test.com') {
        errors.login = 'Неверный логин';
    }
    if (password !== '123123') {
        errors.password = 'Неправильный пароль';
    }
    return errors;
};

class LoginForm extends Component {
    handleSubmit = () => {
        const { login } = this.props;
        login();
    };

    render () {
        const { isAuthorized, classes, handleSubmit } = this.props;
            
        return isAuthorized ? (
            <Redirect to='/map' />
        ) : (
            <Grid container spacing={0} className={classes.container} alignItems='center' justify='center'>
                <Grid item xs={4} >
                    <Paper component='form' onSubmit={handleSubmit(this.handleSubmit)}>
                        <Grid container spacing={24} className={classes.form}>
                            <Grid item xs={12} className={`${classes.alignCenter} ${classes.fieldAlign}`}>
                                <Typography variant='h4'>Войти</Typography>
                            </Grid>
                            <Grid item xs={12} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                                <Field
                                    name="login"
                                    label="Имя пользователя *"
                                    placeholder="Имя пользователя"
                                    type='text'
                                    fullWidth
                                    component={renderTextField}
                                />
                            </Grid>
                            <Grid item xs={12} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                                <Field
                                    name="password"
                                    label="Пароль *"
                                    placeholder="Пароль"
                                    type='password'
                                    fullWidth
                                    component={renderTextField}
                                />
                            </Grid>
                            <Grid item xs={12} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                                <Button variant="outlined" color="primary" type='submit' component='button'>Войти</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = { login };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
    reduxForm({ form: 'loginForm', validate })
)(LoginForm);
