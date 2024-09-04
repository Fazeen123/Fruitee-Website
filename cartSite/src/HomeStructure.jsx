import React, { useEffect, useState } from 'react'
import './HomeStructure.css'
import {FaAngleDoubleLeft} from 'react-icons/fa'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {datas} from './homeData'


const HomeStructure = () => {

    const [images,setImages]=useState([]);
    const [currentSlide,setCurrentSlide]=useState(0);
    
    useEffect(()=>{
        setImages(datas);
        // console.log(images);
    },[datas])

    const handleLeftArrow =()=>{
        setCurrentSlide(currentSlide==0 ? images.length-1 : currentSlide-1)
    }
    const handleRightArrow =()=>{
        setCurrentSlide(currentSlide===images.length-1 ? 0:currentSlide+1)
    }

  return (
    <>
    <div className='main-structure-containor'>
      <div className='structure-containor'>
        {
            images&&images.length ? images.map((item,index)=> <div key={index} className={currentSlide==index ? currentSlide==0 ?"map-containor bg-mango":currentSlide==1?"map-containor bg-orange" : currentSlide==2?" map-containor bg-pineApple":currentSlide==3?"map-containor bg-watermellon":currentSlide==4?"map-containor bg-banana":"map-containor bg-strawberry": "map-containor hide-map-containor"} >
                <div className='heading-hs-content'>Special of Fruitiee</div>
                <div className='left-arrow-containor'><FaAngleDoubleLeft className='left-arrow' onClick={handleLeftArrow}/></div>
        <div className='hs-image-containor'>
            <div className='image-tag-containor'><img src={item.url} alt={item.name} className='hs-image'/></div>
            <div className='image-detail-containor'>
            <div className={currentSlide==index ? currentSlide==0 ? "image-heading heading-bg-mango":currentSlide==1?"image-heading heading-bg-orange" : currentSlide==2?"image-heading heading-bg-pineApple":currentSlide==3?"image-heading heading-bg-watermellon":currentSlide==4?"image-heading  heading-bg-banana":"image-heading  heading-bg-strawberry":'image-heading'}>{item.title}</div>
            <div className={currentSlide==index ? currentSlide==0 ? "about-image heading-bg-mango":currentSlide==1?"about-image heading-bg-orange" : currentSlide==2?"about-image heading-bg-pineApple":currentSlide==3?"about-image heading-bg-watermellon":currentSlide==4?"about-image  heading-bg-banana":"about-image  heading-bg-strawberry":'about-image'}>{item.describe}</div>
            <div className='more-about-image'>More about images</div>
            </div>
        </div>
        <div className='right-arrow-containor'><FaAngleDoubleRight className='right-arrow' onClick={handleRightArrow}/></div>
        <div className='button-indicator-containor'>
        {
            images.map((_,index)=>
                <div key={index} className={currentSlide==index ? "curr-indicator":"curr-indicator blur-indicator"} onClick={()=> setCurrentSlide(index)}></div>
            )
        }
        </div>
        </div>):null
        }
      </div>
      </div>
    </>
  )
}

export default HomeStructure
