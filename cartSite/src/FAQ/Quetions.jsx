import React, { useState } from 'react'
import './Questions.css'

const Questions = ({question,answer,toggleShow,show}) => {
   const [ShowH,setShowH]=useState(show); 

   const toggleHandle = ()=>{
    setShowH(!ShowH);
   }

  return (
    <>
    <div className={`Content-containor ${ShowH ? "active":""}`}>
      
        <div className='Question' onClick={toggleHandle}>{question}</div>
        <div className='Answer-containor'>
        <div className='Answer'>{answer}</div>
        </div>
      
    </div>              
    </>
  );
};

export default Questions
