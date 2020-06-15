import React, {useState} from 'react';
import './individualApplication.css';
import Nav from '../general components/Nav/Nav';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import ModalForm from './components/ModalForm';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #1A4A66',
      color:  '#1A4A66',
      borderRadius: '10px',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));


const IndividualApplication = () => {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return <div className='admin-container'>
            <Nav />
            <div class='home-container'>
            <h1 class='heading heading-application'>JOBS AND INTERNSHIPS</h1>
            <div className='company-application-container'>
                  <div className='edit-button'>
                  <Link className='edit-link' to='/edit'>
                      <p>EDIT</p>
                      <EditIcon className='edit-icon' /> 
                  </Link>
                  </div>
                  <div className='application-company-details'>
                      <h1 className='title'>COMPANY NAME</h1>
                      <p className='info'>Principle Circle Consulting</p>
                      <h1 className='title'>COMPANY CATEGORY</h1>
                      <p className='info'>Digital Marketing</p>
                      <h1 className='title'>LOCATION</h1>
                      <p className='info'>Bangalore</p>
                      <h1 className='title'>DESCRIPTION</h1>
                      <p className='info'>Principle Circle is a start-up company incorporated in 2018 in Bangalore. Principle Circle is a forward-looking organization focused on management consulting and innovative product solutions.
                      Principle Circle is a start-up company incorporated in 2018 in Bangalore. Principle Circle is a forward-looking organization focused on management consulting and innovative product solutions.</p>
                  </div>
                  <div className='btns-container'>
                  <button className='approve-button'>APPROVE</button>
                  <button className='asked-to-review-button' type="button" onClick={handleOpen}>ASKED TO REVIEW</button>
                  <button className='delete-button'>DELETE</button>
                  </div>
            </div>
            </div>
            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <ModalForm close = {handleClose}/>
          </div>
        </Fade>
      </Modal>
           </div>
}
export default IndividualApplication;