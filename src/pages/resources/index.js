import React from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StyleIcon from '@material-ui/icons/Style';

import { ListResources } from '../../components/Resources';

const useStyles = makeStyles({
    icon: {
        display: 'flex',
        alignItems: 'center',
    },
});

export const Resources = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <div className={classes.icon}>
                                <StyleIcon />
                            </div>
                        </Grid>
                        <Grid item>
                            <Typography variant="h5">Recursos</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <ListResources />
                </Grid>
            </Grid>
        </Container>
    );
};
