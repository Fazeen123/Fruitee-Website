import React, { useEffect } from 'react'
import './contact.css'
import {useSelector} from 'react-redux'


const contact = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  return (
    <div>
        <div className='contact-heading' >Contact Details <div className='contact-underline' ></div> </div>  
        <div className='contact-content-containor'>
            <div className='contact contact-1'>
              <div className='phone-img-containor'> <img src="/Images/old-typical-phone.png" alt="Telephone image" className='phone-img' /> </div>
            </div>
            <div className='contact contact-2'>
            <div className='phone-img-containor'> <img src="/Images/whatsapp (1).png" alt="Telephone image" className='phone-img' /> </div>
            </div>
            <div className='contact contact-3'>
            <div className='phone-img-containor'> <img src="/Images/gmail.png" alt="Telephone image" className='phone-img' /> </div>
            </div>
            <div className='contact contact-4'>
            <div className='phone-img-containor'> <img src="/Images/location.png" alt="Telephone image" className='phone-img' /> </div>
            </div>
        </div>   
    </div>
  )
}

export default contact
