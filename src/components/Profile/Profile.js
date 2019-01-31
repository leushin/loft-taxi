import React, { Component, Fragment } from 'react';
import { compose } from 'redux';
import { Field, reduxForm, change } from 'redux-form';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { renderTextField } from '../../helpers';
import { login, getIsAuthorized } from '../../modules/Auth';
import { getProfile, handleProfileSubmit, handleProfileClear } from '../../modules/Profile';
import ProfilePopup from '../ProfilePopup';
import styles from './ProfileStyles';

class Profile extends Component {
    renderForm = () => {
        const { classes, handleSubmit } = this.props;

        return (
            <Fragment>
                <Paper component='form' onSubmit={handleSubmit(this.handleSubmit)}>
                    <Grid container spacing={16} className={classes.form}>
                        <Grid item xs={12}>
                            <Typography variant='h4' className={`${classes.alignCenter} ${classes.fieldAlign}`}>Профиль</Typography>
                            <Typography variant='h6' className={`${classes.alignLeft} ${classes.fieldAlign}`}>Способ оплаты</Typography>
                        </Grid>
                        <Grid item xs={6} >
                            <Field
                                name="cardName"
                                component={renderTextField}
                                label="Имя владельца"
                                type='text'
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Field
                                name="cardNumber"
                                component={renderTextField}
                                label="Номер карты"
                                type='number'
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Field
                                name="expDate"
                                component={renderTextField}
                                label="Дата окончания действия"
                                type='date'
                                required
                                fullWidth
                                InputLabelProps={{ shrink: true }}
                            />
                        </Grid>
                        <Grid item xs={6} >
                            <Field
                                name="cvv"
                                component={renderTextField}
                                label="CVV"
                                type='number'
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={6} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                            <Button variant="contained" color="primary" component='button' type='submit'>Сохранить</Button>
                        </Grid>
                        <Grid item xs={6} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                            <Button variant="contained" color="primary" component='button' onClick={this.handleClear}>Удалить данные</Button>
                        </Grid>
                    </Grid>
                </Paper>

            </Fragment>
        )
    };

    renderPopup = () => {
        const { classes } = this.props;
        return (
            <Fragment>
                <Paper className={classes.form}>
                    <ProfilePopup
                        header='Профиль'
                        body='Платёжные данные обновлены. Теперь вы можете заказывать такси.'
                        btnText='перейти на карту'
                        linkTo='/map'
                    />
                </Paper>
            </Fragment>
        )
    };

    render() {
        const { classes } = this.props;
        const { isUpdated } = this.state;
        return (
            <Grid container spacing={0} className={classes.container} alignItems='center' justify='center'>
                <Grid item xs={9}>
                    {isUpdated
                        ? this.renderPopup()
                        : this.renderForm()
                    }
                </Grid>
            </Grid>
        )
    }
}

const profileSyncValidator = values => {
    const requiredFields = ['cardName', 'cardNumber', 'expDate', 'cvv'];
    const errors = {};
    requiredFields.forEach(field => { errors[field] = !values[field] ? 'Это обязательное поле' : null });
    return errors;
};

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
    initialValues: getProfile(state)
});

const mapDispatchToProps = { login, handleProfileSubmit, handleProfileClear, change };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
    reduxForm({ form: 'profileForm', validate: profileSyncValidator}),
)(Profile);
