import React from 'react'
import './TextField.css'
import {Field,ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'


const TextField = ({name,label,...rest}) => {
  return (
    <div className='form-control'>
               <label htmlFor={name}>{label}</label>
              <Field as='textarea' id={name} name={name} {...rest} className='bio-text-area'/>
              <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default TextField
