import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfilePopup from "../ProfilePopup";
import { connect } from 'react-redux';
import { compose } from 'redux';

class Order extends PureComponent {
	render() {
		const { classes, isProfile, isOrderMade } = this.props;

		return (
			<Grid container spacing={0} className={classes.container} alignItems='center' justify='flex-start'>
				<Grid item xs={8}>
					<Paper className={classes.form}>
						{isProfile && !isOrderMade && <OrderForm/>}
						{isProfile && isOrderMade && <OrderAlert/>}
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
	isOrderMade: getIsOrderMade(state)
});

const mapDispatchToProps = null;

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(styles),
)(Order);