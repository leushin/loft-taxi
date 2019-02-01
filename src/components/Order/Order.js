import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfilePopup from "../ProfilePopup";
import OrderForm from '../OrderForm';
import OrderPopup from '../OrderPopup';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './OrderStyles';
import { getIsProfileFilled } from '../../modules/Profile';
import { getOrderComplete } from '../../modules/Map';

class Order extends PureComponent {
	render() {
		const { classes, isProfile, orderComplete } = this.props;

		return (
			<Grid container spacing={0} className={classes.container} alignItems='center' justify='flex-start'>
				<Grid item xs={8}>
					<Paper className={classes.form}>
						{isProfile && !orderComplete && <OrderForm/>}
						{isProfile && orderComplete && <OrderPopup/>}
						{!isProfile &&
						<ProfilePopup
							header='Заполните платежные данные'
							body='Укажите информацию о банковской карте, чтобы сделать заказ.'
							btnText='перейти в профиль'
							linkTo='/profile'
						/>}

					</Paper>
				</Grid>
			</Grid>
		)
	}
}   

const mapStateToProps = state => ({
	isProfile: getIsProfileFilled(state),
	orderComplete: getOrderComplete(state)
});

const mapDispatchToProps = null;

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styles),
)(Order);