import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { logout, getIsAuthorized } from '../../modules/Auth';


const styles = theme => ({
    grow: {
        flexGrow: 1,
    }
});


class Menu extends Component {
    handleLogout = () => {
        const { logout } = this.props;
        logout(false)
    }

    render(){
        const {isAuthorized, classes} = this.props;

        return (
            <AppBar position='static' color='inherit'>
                <Toolbar>
                    <Typography variant='h5' color='default' className={classes.grow}>Loft Taxi</Typography>
                    <Button component={Link} to='/map' color='default'>Карта</Button>
                    <Button component={Link} to='/profile' color='default'>Профиль</Button>
                    <Button 
                        component={Link} 
                        to='/login' 
                        color='default' 
                        onClick={this.handleLogout}
                    >
                        {isAuthorized ? 'Выйти' : 'Войти'}
                    </Button>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

const mapDispatchToProps = {logout};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Menu));
