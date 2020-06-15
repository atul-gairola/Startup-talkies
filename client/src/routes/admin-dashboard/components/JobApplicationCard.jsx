import React from 'react';
import './JobApplicationCard.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';

const JobApplicationCard = () => {
    return <div className='jobcard-container jobcardApplication-container'>
    <div className='jobcard-likes'>
    <p className='see-more'><Link to='/admin/individualApplication'>SEE MORE</Link></p>
    </div>
    <h1 className='jobcard-category'>Digital Marketing</h1>
    <p className='jobcard-companyName'>Principle Circle Consulting</p>
    <div className='jobcard-location'>
        <LocationOnIcon className='location-icon'/>
        <p>Bangalore</p>               
    </div>
    <p className='jobcard-description'>
    Principle Circle is a start-up company incorporated in 2018 in Bangalore. Principle Circle is a forward-looking organization focused on management consulting and innovative product solutions.
    </p>
    <DeleteIcon className='delete-icon'/>
    <button className='approve-button'>APPROVE</button>
    </div>
}


export default JobApplicationCard;