import React, { useState } from "react";
import InfoCard from "../../components/InfoCard/InfoCard"
import Details from "../../components/Details/Details"
import { Grid } from '@mui/material/Grid';
import "./Statistics.css";
import useStyles from '../../constants/sizeStyles';

function Statistics() {

    const classes = useStyles();

    return (
        <div className="container">
            <Grid className={classes.grid} container spacing={2} alignItems="center" justify="center" style={{ height: '100vh' }}>
                <Grid item xs={12} sm={4} className={classes.fist}>
                    <Details title="Income" />
                </Grid>
                <Grid item xs={12} sm={4} className={classes.last}>
                    <Details title="Expense" />
                </Grid>
            </Grid>
        </div>
    );
}

export default Statistics;
