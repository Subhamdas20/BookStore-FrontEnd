import React from 'react';
import { Button, TextField } from '@material-ui/core';
function Login() {
  return (<>
      <div className='login'>
            <TextField style={{ backgroundColor: 'white' }} className="emailinput" type='text' id="outlined-email" label="Email Id" variant="outlined"
               />
            <TextField style={{ backgroundColor: 'white' }} className="passwordinput" type='password' id="outlined-password" label="Password" variant="outlined"
               />
            <br></br>
            <Button className='loginbutton' style={{ backgroundColor: '#A03037' }}  > Login </Button>
            <p className='mid'>OR</p>

            <div className='Buttons'>
                <Button className='fbButton' style={{ backgroundColor: '#4266B2' }} variant="contained">Facebook</Button>
                <Button className='googleButton' variant="contained">Google</Button>
            </div>

        </div>

  </>);
}

export default Login;
