import React, { useEffect, useState } from 'react'
import './FourthHome.css'
import google  from '/Images/google.png'
import {FaStar} from 'react-icons/fa'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import {FaArrowAltCircleRight} from 'react-icons/fa'
import {cutomerReview} from './homeData'


const fourthHome = () => {

      const [reviewArr,setReviewArr]=useState([]);
      const [slideOne,setSlideOne]=useState(0);
      const [slideTwo,setSlideTwo]=useState(1);
      const [slideThree,setSlideThree]=useState(2);
      const [slidFour,setSlideFour]=useState(3);
      
      useEffect(()=>{
        setReviewArr(cutomerReview);
        // console.log(reviewArr);
      },[cutomerReview]);

      const RightArrowHandler= () =>{
        setSlideOne(slideOne===0 ? reviewArr.length-1:slideOne-1);
        setSlideTwo(slideTwo===0 ? reviewArr.length-1:slideTwo-1);
        setSlideThree(slideThree===0 ? reviewArr.length-1:slideThree-1);
        setSlideFour(slidFour===0 ? reviewArr.length-1:slidFour-1);

      }
      const LeftArrowHandler  =() =>{
        setSlideOne(slideOne===reviewArr.length-1 ? 0:slideOne+1);
        setSlideTwo(slideTwo===reviewArr.length-1 ? 0:slideTwo+1);
        setSlideThree(slideThree===reviewArr.length-1 ? 0:slideThree+1);
        setSlideFour(slidFour===reviewArr.length-1 ? 0:slidFour+1)

      }

  return (
    <>
      <div className='main-fouth-home-containor'>
        <div className='fourth-home-heading-containor'>Customers reviews<div className='underline underline-cr'></div></div>
        <div className='fourth-home-content-containor'>
          <FaArrowAltCircleLeft className='left-arrow-review' onClick={LeftArrowHandler}/>
          {
            reviewArr && reviewArr.length ? reviewArr.map((item,index)=>{
              return <div className={slideOne ===index ? 'Review-containor':'Review-containor hide-slide'} key={index}>
              <div className='customer-details'>
                <div className='customer-name'>{item.name}</div>
                <div className='google-logo'><img src={google} alt="Google" className='google-icon'/></div>
              </div>
              <div className='star-containor'><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/></div>
              <div className='customer-review'>{item.review}</div>
            </div>
            }):null
          }
          {
            reviewArr && reviewArr.length ? reviewArr.map((item,index)=>{
              return <div className={slideTwo===index ? 'Review-containor':'Review-containor hide-slide'} key={index}>
              <div className='customer-details'>
                <div className='customer-name'>{item.name}</div>
                <div className='google-logo'><img src={google} alt="Google" className='google-icon'/></div>
              </div>
              <div className='star-containor'><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/></div>
              <div className='customer-review'>{item.review}</div>
            </div>
            }):null
          }
          {
            reviewArr && reviewArr.length ? reviewArr.map((item,index)=>{
              return <div className={slideThree===index ? 'Review-containor':'Review-containor hide-slide'} key={index}>
              <div className='customer-details'>
                <div className='customer-name'>{item.name}</div>
                <div className='google-logo'><img src={google} alt="Google" className='google-icon'/></div>
              </div>
              <div className='star-containor'><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/></div>
              <div className='customer-review'>{item.review}</div>
            </div>
            }):null
          }
          {
            reviewArr && reviewArr.length ? reviewArr.map((item,index)=>{
              return <div className={slidFour===index ? 'Review-containor Review-containor-4':'Review-containor hide-slide'} key={index}>
              <div className='customer-details'>
                <div className='customer-name'>{item.name}</div>
                <div className='google-logo'><img src={google} alt="Google" className='google-icon'/></div>
              </div>
              <div className='star-containor'><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/><FaStar className='FaStar'/></div>
              <div className='customer-review'>{item.review}</div>
            </div>
            }):null
          }
          <FaArrowAltCircleRight className='right-arrow-review' onClick={RightArrowHandler}/>
         </div>


      </div>     
    </>
  )
}

export default fourthHome
