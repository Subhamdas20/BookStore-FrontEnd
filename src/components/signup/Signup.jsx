import React from 'react';
import { Button, TextField } from '@material-ui/core';
import './signup.scss'
import { UserService } from '../../services/UserService';

function Signup() {
    const [fields,setFields]=React.useState({
        fullname : "",
        email : "",
        password : "",
        phone : "",
        fullnameError : "",
        emailError : "",
        passwordError: "",
        phoneError : ""
     })

    const changevalues=(e)=>{
        setFields((previousvalues)=>{
            return {...previousvalues,[e.target.name]:e.target.value}
        })
    }
    const validate=()=>{
        const nameError=fields.fullname==='' ? true : false
        const mailError=fields.email==='' ? true : false
        const passError=fields.password==='' ? true : false
        const phError=fields.phone==='' ? true : false
        setFields((previousvalues)=>{
            return {...previousvalues,fullnameError:nameError,emailError:mailError,passwordError:passError,phoneError:phError}

        })
        return nameError||mailError||passError||phError

    }
    const signup=()=>{
        let  isValidate=validate()
        if(!isValidate){
            let data ={
                "fullname" : fields.fullname,
                "email" : fields.email,
                "password" : fields.password,
                "phone" : fields.phone
            }
            UserService.signup(data).then(()=>{
                console.log("sucss");
            }).catch((err)=>{
                console.log("fail");
            })
        }
       
    }
    return <>
        <div className='signup'>
            <div className='fullName'>
                <TextField name="fullname" style={{ width: "232px" }} size="small" type='text' variant="outlined" label="First Name"
                onChange={(e)=>{changevalues(e)}} error={fields.fullnameError}/>
            </div>
            <div className='emailInput'>
                <TextField name="email" style={{ width: "232px" }} size="small" type='email' variant="outlined" label="Email Id"
                onChange={(e)=>{changevalues(e)}} error={fields.emailError}/>
            </div>
            <div className='password'>
                <TextField name="password" style={{ width: "232px" }} size="small" type='password' variant="outlined" label="Password"
                onChange={(e)=>{changevalues(e)}} error = {fields.passwordError}/>
            </div>
            <div>
                <TextField name="phone" style={{ width: "232px" }} className='phonenumber' size="small" type='number' variant="outlined" label="Number"
                onChange={(e)=>{changevalues(e)}} error = {fields.phoneError}/>
            </div>
            <div> <Button className='signupButton' style={{ backgroundColor: '#A03037' }} onClick={()=>signup()} > SignUp </Button>
            </div>
        </div>
    </>;
}

export default Signup;
