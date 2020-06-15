import React, {useState} from 'react';
import './Auth.css';
import {Link} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


const Auth = () => {

const [authType, setAuthType] = useState('login');    

const sliderLocation = { left: '0%'};

const changeAuthType = (e) =>{
setAuthType(e.target.id);
}

const renderAuth = () => {
    if(authType === 'login' ){
        return <Login />
    } 
    else {
        return <Register />
    }
    
}

(authType === 'login') ?  sliderLocation.left = '0%' : sliderLocation.left = '50%';


    return <div className='auth-container'>
             <Link to='/' className='react-link'>
             <h1 className='logo'><span>STARTUP</span> TALKIES</h1>
             </Link>
             <div className='auth-form-wrapper'>
             <div className='button-container'>
          <div id='slider' style={sliderLocation}></div>
          <button id='login' onClick={changeAuthType}>LOGIN</button>
          <button id='register' onClick={changeAuthType}>REGISTER</button>
          </div>
          <div className='form-container'>
             {  renderAuth() } 
          </div>
             </div>
           </div>
}


export default Auth;