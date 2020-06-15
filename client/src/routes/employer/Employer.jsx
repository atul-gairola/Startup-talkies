import React from 'react';
import './Employer.css';
import Nav from '../general components/Nav/Nav';


const Employer = () => {
    return <div>
             <Nav />
             <div id='employer-container'>
                 <h1 class='heading'>PUBLISH A JOB APPLICATION</h1>
                 <div className='card-container'>
                 <form id='job-application-form'>
              <label>COMPANY NAME</label>
              <input type='text' id='company-name'  autoComplete='off'></input>
              <label>COMPANY WEBSITE</label>
              <input type='text' id='company-website'  autoComplete='off'></input>
              <label>CATEGORY</label>
              <input type='text' id='job-category'  autoComplete='off'></input>
              <label>LOCATION</label>
              <input type='text' id='job-location'  autoComplete='off'></input>
              <label>JOB DESCRIPTION</label>
              <textarea type='text' id='job-description'  autoComplete='off'></textarea>
   
              <button id='publish-button'>PUBLISH</button>
       </form>
                 </div>
             </div>
           </div>
}

export default Employer;