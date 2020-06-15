import React from 'react';
import './Employee.css';
import Nav from '../general components/Nav/Nav';


const Employee = () => {
    return <div>
             <Nav />
             <div id='employee-container'>
                 <h1 class='heading'>FIND JOBS</h1>
                 <div className='card-container'>
                 <form id='find-jobs-form'>
              <label>FIRST NAME</label>
              <input type='text' id='first-name'  autoComplete='off'></input>
              <label>LAST NAME</label>
              <input type='text' id='last-name'  autoComplete='off'></input>
              <label>LOCATION</label>
              <input type='text' id='location'  autoComplete='off'></input>
   
              <button id='find-button'>FIND</button>
       </form>
                 </div>
             </div>
           </div>
}

export default Employee;