import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './signup.scss'
function Signup() {
    return <>
        <div className='signup'>
            <div className='fullName'>
                <TextField style={{ width: "232px" }} size="small" type='text' variant="outlined" label="First Name"
                />
            </div>
            <div className='emailInput'>
                <TextField style={{ width: "232px" }} size="small" type='email' variant="outlined" label="Email Id"
                />
            </div>
            <div className='password'>
                <TextField style={{ width: "232px" }} size="small" type='password' variant="outlined" label="Password"
                />
            </div>
            <div>
                <TextField style={{ width: "232px" }} className='phonenumber' size="small" type='number' variant="outlined" label="Number"
                />
            </div>

            <div> <Button className='signupButton' style={{ backgroundColor: '#A03037' }}  > SignUp </Button>
            </div>
        </div>
    </>;
}

export default Signup;
