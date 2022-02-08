import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './login.scss'
import { UserService } from '../../services/UserService';

function Login() {
    const[textfieldvalues,setTextfieldvalues]= React.useState({
        emailId : "",
        password : "",
        emailIdError: false,
        passwordError: false
    })
    const changeFields=(e)=>{
        setTextfieldvalues(previousvalues=>{
           return {...previousvalues,[e.target.name]:e.target.value}
        })
    }
    const validate=()=>{
        let emailError = textfieldvalues.emailId==='' ? true : false
        let passworderror = textfieldvalues.password==='' ? true : false
        setTextfieldvalues((previousvalues)=>{
            return {...previousvalues,emailIdError: emailError ,passwordError : passworderror}
        })
        return emailError||passworderror

    }
    const login =()=> {
        let isValidate = validate();
        if(!isValidate){
            let data={
                "email":textfieldvalues.emailId,
                "password" : textfieldvalues.password
            }
            UserService.login(data).then((data)=>{
                console.log(data);
                console.log("login sucess");
            }).catch((err)=>{
                
            })
        }
    }
    return (<>
        <div className='login'>
            <div className='mail'>
                <TextField name ="emailId" className="emailfield" style={{ backgroundColor: 'white' }} size="small" type='text' id="outlined-email" label="Email Id" variant="outlined"
                onChange={(e)=>changeFields(e)} error={textfieldvalues.emailIdError}/>
            </div>
            <div>
                <TextField name="password" className="passwordfield" style={{ backgroundColor: 'white' }} size="small" type='password' id="outlined-password" label="Password" variant="outlined"
               onChange={(e)=>changeFields(e)} error ={textfieldvalues.passwordError} />
            </div>
            <br></br>
            <Button className='loginbutton' style={{ backgroundColor: '#A03037' }} onClick={()=>login()} > Login </Button>
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
