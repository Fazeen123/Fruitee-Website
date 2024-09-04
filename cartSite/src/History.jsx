import React, { useState } from 'react'
import './History.css'


const History = () => {
  const [isOverFlow,setIsOverFlow]=useState(false);
   const historyPara = document.querySelector('.history-content');
   const Dot = document.querySelector('dot');



  return (
    <div className='History-main-containor'>
    <div className='history-heading'>History <div className='under-line'></div></div>
    <div className='history-content-containor'>
      <div className='history-img-containor'> <img src="/Images/Juice shop.jpg" alt="Juice shop picture" className='JuiceShopImg' /> </div>
      <div className='history-content hs-content-containor'  style={isOverFlow ? {overflow:'hidden', overflowX:'hidden'} : {overflow:'hidden',overflowX:'hidden'}} >
      <div className='history-content-para' style={isOverFlow ? {overflow:'scroll',overflowX:'hidden'} : {overflow:'hidden'}}  >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit ipsum veritatis aliquid laboriosam consequatur, excepturi aliquam saepe nulla libero doloremque! Non voluptatibus omnis officia quia similique. Autem voluptate voluptates aliquam!
      Sed molestiae porro accusamus sapiente necessitatibus, impedit atque assumenda modi! Asperiores sed debitis voluptas nobis, eius deserunt! Itaque natus impedit molestiae! Sed error consequatur architecto, quisquam accusamus cumque minus obcaecati?
      Nisi debitis corporis repellendus maiores aperiam laborum pariatur dolor ratione recusandae molestiae? Ut, asperiores? Sequi est itaque iusto. Iure eaque quo incidunt nobis veritatis earum culpa non odit a facilis?
      Repellat necessitatibus nobis tempore ab, accusantium at soluta officia enim voluptates ratione dolores rerum doloremque a quo tempora reiciendis modi, repudiandae eaque eligendi amet.Iure eaque quo incidunt nobis veritatis earum culpa non odit a facilis?
      Repellat necessitatibus nobis tempore ab, accusantium at soluta officia enim voluptates ratione dolores rerum doloremque a quo tempora reiciendis modi, repudiandae eaque eligendi amet. <button onClick={()=> setIsOverFlow(false)} className={isOverFlow ? 'back' :'hide'} >back</button> </div>
      <button className={isOverFlow ? 'hide':'history-read-more'} onClick={()=> setIsOverFlow(!isOverFlow)} >Read more...</button>
      </div>
    </div>
      
    </div>
  )
}

export default History
