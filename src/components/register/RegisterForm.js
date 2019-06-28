import React from 'react';
import {Container, TextField} from "@material-ui/core";

const RegisterForm = () => (
    <Container maxWidth={'sm'}>
        <TextField
            label='Nick Name'
            margin='normal'
            variant='outlined'
            name='nickname'
            fullWidth
            required
        />
    </Container>
);

export default RegisterForm;
