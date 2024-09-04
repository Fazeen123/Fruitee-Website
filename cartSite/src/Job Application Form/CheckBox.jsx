import React from 'react'
import './CheckBox.css'
import {Field,ErrorMessage} from 'formik'

const CheckBox = ({name,label,options,...rest}) => {
  return (
    <div className='form-control'>
    <label >{label}</label>
    <div className='checkbox-containor'>
    <Field name={name}  >
        {
            ({field})=>{
                return options.map((option)=>{
                    return <div key={option.key} className='check-box'>
                        <input type="checkbox" name={option.value} id={option.key} {...field} {...rest} value={field.value}/>
                        <label htmlFor={option.key}>{option.value}</label>
                    </div>
                })
            }
        }        
    </Field>  

    </div>
    </div>
  )
}

export default CheckBox
