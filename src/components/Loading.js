import React from 'react';
import Grid from '@material-ui/core/Grid';

const Loading = () => (
    <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "50vh" }}
    >
        <Grid item xs={12}>
            <h3>Loading ......</h3>
        </Grid>
    </Grid>
);

export default Loading;
