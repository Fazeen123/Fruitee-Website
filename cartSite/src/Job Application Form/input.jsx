import React from 'react'
import './input.css'
import {Field,ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const input = ({label,name,...rest}) => {
  return (
    <div className='form-control'>
              <label htmlFor={name}>{label}</label>
              <Field type='text' id={name} name={name} {...rest} className='field'/>
              <ErrorMessage name={name} component={ErrorText} />
    </div>
  )
}

export default input
