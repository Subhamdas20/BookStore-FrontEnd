import React from 'react'
import { Navigate ,useNavigate , Route } from 'react-router-dom';


const ProtectedRoute= ({ component: Component,...rest  }) =>{
  const navigate=useNavigate() (
  
  <Route {...rest} render={props => localStorage.getItem("token") ? ( <Component {...props} /> ) : (console.log("nnnnn"))} 
   /> )}

export default ProtectedRoute