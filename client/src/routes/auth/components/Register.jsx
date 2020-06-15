import React from 'react';
import  './Register.css';

const Register = () => {
return <form id='register-form'>
              <label>EMAIL</label>
              <input type='text' id='register-email' autoComplete='off'></input>
              <label>PASSWORD</label>
              <input type='password' id='register-password'  autoComplete='off'></input>
              <input type='radio' id='employer-radio' name='registration-type' value='employer'></input>
              <label className='radio-label'>Check if an employer</label>
              <input type='radio' id='employee-radio' name='registration-type' value='employee'></input>
              <label className='radio-label'>Check if an employee</label>
              <button id='register-button'>REGISTER</button>
              
       </form>
}

export default Register;