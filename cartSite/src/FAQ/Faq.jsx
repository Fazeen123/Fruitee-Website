import React, { useEffect, useState } from 'react'
import './Faq.css'
import {QandA} from './data.js'
import Questions from './Quetions.jsx'

const App = () => {
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])
  
  
  return (
    <>
      <div className='Main-Containor'>
        <div className='FAQ-Containor'>
        <div className='Heading-FAQ' id='top' >FAQ</div>
        {QandA.map((d)=>(<Questions key={d.question} {...d} />))}
        </div>
      </div>
    </>
  )
}
export default App
