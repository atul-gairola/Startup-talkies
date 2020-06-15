import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import './Nav.css';
import {Link} from 'react-router-dom';

const Nav = ()  => {
    return <nav>
            <Link to='/' class='react-link'>
            <h1 className='logo'><span>STARTUP</span> TALKIES</h1>
            </Link>
            <div className='nav-link'>
            <Link to='/auth'>
            <p>LOGIN / REGISTER</p>
            <PersonIcon className='login-icon'/>
            </Link>
            </div>
            
          </nav>
}

export default Nav;