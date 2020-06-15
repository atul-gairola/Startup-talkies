import React from 'react';
import './JobCard.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

const JobCard = () => {
    return <div className='jobcard-container'>
           <div className='jobcard-likes'>
           <ThumbUpAltIcon className='like-button like-dislike-button'/>
           <ThumbDownIcon className = 'dislike-button like-dislike-button'/>
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
           <p className='learn-more'>LEARN MORE</p>
           </div>
}

export default JobCard;