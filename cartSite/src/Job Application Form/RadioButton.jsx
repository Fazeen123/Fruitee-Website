import React from 'react'
import './RadioButton.css'
import {Field,ErrorMessage} from 'formik'
import ErrorText from '../ErrorText'

const RadioButton = ({label,name,options,...rest}) => {
  return (
    <div className='form-control'>
        <label >{label}</label>
        <div className='radio-btn-containor'>
        <Field  name={name} {...rest}>
            
            {
                ({field})=>{
                    return options.map((option)=>{
                        return <div className='radio-btn' key={option.key}>
                               <input type="radio"  id={option.value} {...field} value={option.value} checked={option.value===field.value} />
                               <label htmlFor={option.value}>{option.value}</label>
                               </div>
                    })
                }
            }
        </Field>
        </div>
        <ErrorMessage name={name} component={ErrorText} />              
    </div>
  )
}

export default RadioButton
