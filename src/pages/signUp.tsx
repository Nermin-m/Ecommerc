import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";
import { VariantType, useSnackbar } from 'notistack';

const SignUp: React.FC = () => {
    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant: VariantType) => () => {
        enqueueSnackbar('You have signed up successfully!', { variant });
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, width: '300px', margin: 'auto', mt: 5 }}>
            <TextField
                helperText="Please enter your name"
                id="demo-helper-text-aligned"
                label="Name"
                required
            />
            <TextField
                helperText="Please enter your email"
                id="demo-helper-text-aligned-email"
                label="Email"
                type="email"
                required
            />
            <TextField
                helperText="Please enter your password"
                id="demo-helper-text-aligned-password"
                label="Password"
                type="password"
                required
            />
            <Button variant="contained" color="primary" onClick={handleClickVariant('success')} sx={{mt:2,p:2}}>
                Sign Up
            </Button>
        </Box>
    );
};

export default SignUp;
