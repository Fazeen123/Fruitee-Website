import React from 'react'
import './AccountStructure.css'
import { Link } from 'react-router-dom'


const AccountStructure = () => {
  return (
    <div>
        <div className='Profile-containor'>
            {/* <div className='cover-picture'></div> */}
            <div className='profile-picture'></div>
        </div> 
        <div className='application-form-content'>
            <p>Click the Job Application button and Fill the following the Job Application Form.</p>
            <Link to='/Job Form' ><button className='jobform-btn'>Job Application Form</button></Link>
        </div> 
        <div></div>    
    </div>
  )
}

export default AccountStructure
