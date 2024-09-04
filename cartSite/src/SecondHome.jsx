import React, { useEffect, useState } from 'react'
import './SecondHome.css'
import { secondContent } from './homeData'


const SecondHome = () => {
    const [scImages,setSCImages]=useState([]);

    useEffect(()=>{
        setSCImages(secondContent);
    },[secondContent])
  return (
    <>
     
      <div className='main-second-home-containor'>
           <div className='sc-title'>Our products </div>
           <div className='main-second-home-content-containor'>
                
           {
            scImages && scImages.map((item,index)=><div className='second-home-content-containor' key={index}>
            <div className='second-home-content-image-containor'>
                <img src={item.url} alt="juice cup" className='second-home-content-image' />
            </div>
            <div className='sc-item-title'>{item.title}</div>
            <div className='second-home-content-detail-containor'>{item.describe}</div>
          </div>
    )
           }
           </div>

      </div>
    </>
  )
}

export default SecondHome
