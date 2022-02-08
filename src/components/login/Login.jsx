import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.scss'
function Login() {
    return (<>

        <div className='login'>
            <div className='mail'>
                <TextField className="emailfield" style={{ backgroundColor: 'white' }} type='text' id="outlined-email" label="Email Id" variant="outlined"
                />
            </div>

            <div>
                <TextField className="passwordfield" style={{ backgroundColor: 'white' }} type='password' id="outlined-password" label="Password" variant="outlined"
                />
            </div>

            <br></br>
            <Button className='loginbutton' style={{ backgroundColor: '#A03037' }}  > Login </Button>
            <p className='mid'>OR</p>

            <div className='Buttons'>
                <div className='facebookbButton'>
                    <Button style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                </div>
                <div className='googleButton'>
                    <Button variant="contained">Google</Button>

                </div>
            </div>
        </div>
    </>);
}

export default Login;
