import React from 'react';
import './AdminDashboard.css';
import Nav from '../general components/Nav/Nav';
import JobApplicationCard from './components/JobApplicationCard';

const AdminDashboard = () => {
return <div className='admin-container'>
       <Nav />
       <div class='home-container'>
            <h1 class='heading'>ADMIN DASHBOARD</h1>
            <JobApplicationCard />
            </div>
       </div>
}

export default AdminDashboard;
