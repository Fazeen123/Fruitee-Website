import React, { useEffect } from 'react'
import './AboutUs.css'
import IntroHome from './IntroHome'
import History from './History'
import StaffMessage from './StaffMessage'
import Contect from './contact'

const AboutUs = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])


  return (
    <>
      <div className='aboutus-main-containor'>
        <div className='heading' id='top'>Fruitees</div>
          <div>
            <IntroHome />            
          </div>
          <div className='history-containor'>
          <History />        
          </div>
          <div>
            <StaffMessage/>
          </div>
          <div>
            <Contect/>
          </div>
      </div>
    </>
  )
}

export default AboutUs
