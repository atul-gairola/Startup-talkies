import React, { useState } from 'react';
import Nav from '../general components/Nav/Nav';

const Edit = () => {

    const [data , setData] = useState({
        companyName: 'Principle Circle Consulting',
        jobCategory: 'Digital Marketing',
        jobLocation: 'Bangalore',
        jobDescription: 'Principle Circle is a start-up company incorporated in 2018 in Bangalore. Principle Circle is a forward-looking organization focused on management consulting and innovative product solutions. Principle Circle is a start-up company incorporated in 2018 in Bangalore. Principle Circle is a forward-looking organization focused on management consulting and innovative product solutions.'
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
       setData((previous) => {
           return {
               ...previous,
               [name]: value
           }
       })
    }

    return <div>
           <Nav />
             <div id='employer-container'>
                 <h1 class='heading'>PUBLISH A JOB APPLICATION</h1>
                 <div className='card-container'>
                 <form id='job-application-form'>
              <label>COMPANY NAME</label>
              <input type='text' name='companyName' id='company-name' value={data.companyName} autoFocus  autoComplete='off' onChange={handleChange}></input>
              <label>CATEGORY</label>
              <input type='text' name='jobCategory' id='job-category' value={data.jobCategory}  autoComplete='off' onChange={handleChange}></input>
              <label>LOCATION</label>
              <input type='text' name='jobLocation' id='job-location' value={data.jobLocation} autoComplete='off' onChange={handleChange}></input>
              <label>JOB DESCRIPTION</label>
              <textarea type='text' name='jobDescription' id='job-description' value={data.jobDescription} autoComplete='off' onChange={handleChange}></textarea>
   
              <button id='publish-button'>PUBLISH</button>
       </form>
                 </div>
             </div>
           </div>
}

export default Edit;