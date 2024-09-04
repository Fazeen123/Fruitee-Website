import React from 'react'
import './IntroHome.css'

const IntroHome = () => {
  return (
    <>
    <div className='main-third-home-containor'>
        
        <div className='third-home-heading'>Welcome to <span className='frutiees'>Frutiees</span> <div className='underline'></div> </div>
        <div className='third-home-content-contaonor'>
            <div className='leftside-third-home'>
            <div className='intro-picture-background'> <div className='drink-bottle-image-containor'><img src="/Images/DrinkBottle.jpg" alt="juice bottle" className='drink-bottle-image' /></div></div>
            </div>
            <div className='rightside-third-home'>
               <div className='rightside-third-home-content'>
               <div className='frutiees-detail-containor'>
                  <div className='frooties-details-heading'>We are <span className='frutiees'>Frutiees</span> </div>
                  <div className='frutiees-details'>Hey buddy, We are producing fruit based product. You can have any kind of fruit flavour products such juices, shakes, ice cream, salads, deserts and baked foods. We have mre than thirty fruits flavours.<br/> You can find us throuhg our onsite branches, apps and web site. Here we are for make your day fresh.</div>
               </div>
               <div className='mission-containor'>
                   <div className='mission-heading'>Our Mission</div>
                   <div className='mission-content'>Providing a healthy fruit product for valuable amount. Serving them with kind through every ways.Achieving best product in national wide.</div>
               </div>
               </div>
            </div>
    
            
        </div>
    </div>
    </>
  )
}

export default IntroHome
