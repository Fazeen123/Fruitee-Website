import React from 'react'
import './Select.css'
import {Field,ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const Select = ({label,name,options,...rest}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
        <Field as='select' id={name} name={name} className='selection'>
            {
                options.map((option,index)=>{
                    return <option value={option.value} id={name} key={index}>{option.value}</option>
                })
            }    
        </Field>
        <ErrorMessage name={name} component={ErrorText} />     
    </div>
  )
}

export default Select
