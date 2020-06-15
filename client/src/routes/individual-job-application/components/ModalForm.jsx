import React, {useState} from 'react';
import './ModalForm.css';
import axios from 'axios';


const ModalForm = (props) => {

    const submit = () => {
        const {close} = props;
        close();
    }

    const [description, setDescription] = useState('');
      
    const handleChange = (e) => {
       const {value} = e.target;
        setDescription(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            mailDesc: description
        }

        axios({
            url: '/mailData',
            method: 'POST',
            data: payload
        })
        .then(()=> {
            console.log('Data has been sent to the server');
        })
        .catch((error)=> {
            console.log('Error: ', error);
        })
    }

    return <form onSubmit= {onSubmit}>
              <h2 id="transition-modal-title">DESCRIBE THE DETAILS</h2>
              <textarea className='modal-textarea'  type='text' value = {description} onChange={handleChange} />
              <button className='asked-to-review-button modal-button' onClick={submit}>SEND</button>
           </form>
}



export default ModalForm;