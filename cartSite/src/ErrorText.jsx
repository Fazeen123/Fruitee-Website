import React from 'react'
import './ErrorText.css'

const ErrorText = (props) => {
  return (
    <div className='error'>
      {props.children}
    </div>
  )
}

export default ErrorText
