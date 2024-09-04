import React, { useState } from 'react'
import './Footer.css'
import {FaAngleDoubleUp} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaSnapchat} from 'react-icons/fa'
import {FaEnvelope} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { checkingContact } from './Store/Slices/footerSlice'

const Footer = () => {
    const [isContact,setIsContact]=useState(false);
    const dispatch = useDispatch();

    const contactClickHandler = () =>{
        setIsContact(true);
    }

    console.log("isContect",isContact)
    dispatch(checkingContact(isContact));

    const upClickhandler = () =>{
        window.scrollTo(0,0);
    }
    
  return (
    <div className='Main-Footer-Containor'>
        <div className='up-icon-containor'><FaAngleDoubleUp className='up-direction-icon' onClick={upClickhandler} /></div>    
        <div className='main-footer-containor'>
            <div className='footer-cafe-logo'>Shop Logo</div>
            <div className='footer-content-containor'>
                <div className='footer-contents'>
                    <div className='coulmn-1'>
                        <ul>
                            <li> <Link to='/Menu' className='btn'  >Menu</Link> </li>
                            <li><Link to='/About-us' className='btn'>About Us</Link></li>
                            <li>Branches</li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li>Blogs</li>
                            <li>Career</li>
                            <li onClick={contactClickHandler}><Link to='/Contact' className='btn'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className='coulmn-1'>
                        <ul>
                            <li><Link to='/Services' className='services-btn'>Services</Link></li>
                            <li><Link to='/Faq-Page' className='btn'>FAQ</Link></li>
                            <li>Privacy & Policy</li>
                        </ul>
                    </div>
                </div>
                <div className='social-connections'>
                    <FaEnvelope className='social-icons'/>
                    <FaTwitter className='social-icons'/>
                    <FaFacebook className='social-icons'/>
                    <FaInstagram className='social-icons'/>
                    <FaSnapchat className='social-icons'/>
                </div>
            </div>
            <div className='footer-content-3'>
                Some thing content
            </div>
        </div>   
    </div>
  )
}

export default Footer
