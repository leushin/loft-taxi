
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import styles from './OrderPopupStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { setOrderComplete } from '../../modules/Map'

class OrderPopup extends Component {
    handleClick = () => {
        const { setOrderComplete } = this.props;
        setOrderComplete(false);
    }

    render(){
        const { classes } = this.props;

        return (
            <Grid container spacing={24} >
                <Grid item xs={12} className={`${classes.alignCenter} ${classes.fieldAlign}`}>
                    <Typography variant='h4'>Заказ размещён</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body1'>Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут</Typography>
                </Grid>
                <Grid item xs={12} className={`${classes.alignLeft} ${classes.fieldAlign}`}>
                    <Button variant="outlined" color="primary" component='button' onClick={this.handleClick}>сделать новый заказ</Button>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => state;
const mapDispatchToProps = { setOrderComplete };

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
)(OrderPopup);
