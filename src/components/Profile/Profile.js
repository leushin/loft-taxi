import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';

class Profile extends Component {
    render() {
        return (
            <Grid container spacing={0} alignItems='center' justify='center'>
                <Grid item xs={9}>
                    ProfileForm
                </Grid>
            </Grid>
        )
    }
}

export default Profile;