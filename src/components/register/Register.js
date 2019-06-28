import React from 'react';
import { Grid } from '@material-ui/core';
import RegisterInfo from "./RegisterInfo";
import RegisterForm from "./RegisterForm";

const Register = () => (
    <div>
        <Grid container>
            <Grid item xs={12} md={6}>
                <RegisterInfo/>
            </Grid>
            <Grid item xs={12} md={6}>
                <RegisterForm/>
            </Grid>
        </Grid>
    </div>
);

export default Register;
