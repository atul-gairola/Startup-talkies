import React from 'react';
import  './Login.css';

const Login = () => {
return <form id='login-form'>
              <label>EMAIL</label>
              <input type='text' id='login-email'  autoComplete='off'></input>
              <label>PASSWORD</label>
              <input type='password' id='login-password'  autoComplete='off'></input>
              <button id='login-button'>LOGIN</button>
       </form>
}

export default Login;