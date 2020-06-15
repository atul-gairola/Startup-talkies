import React from 'react';
import './Home.css';
import Nav from '../general components/Nav/Nav';
import JobCard from './components/JobCard/JobCard';

const Home = () => {
    return <div>
            <Nav />
            <div class='home-container'>
            <h1 class='heading'>JOBS AND INTERNSHIPS</h1>
            <JobCard />
            </div>
          </div>
}

export default Home;