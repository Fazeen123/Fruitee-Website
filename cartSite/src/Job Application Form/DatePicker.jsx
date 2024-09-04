import React from 'react'
import {Field,ErrorMessage} from 'formik'
import DateView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import ErrorText from '../ErrorText'

const DatePicker = ({name,label,...rest}) => {
  return (
    <div className='form-control date-picker'>
        <label htmlFor={name}>{label}</label>
        <Field name={name} className='field'>
            {
                ({form,field})=>{
                    const {setFieldValue}=form
                    const {value}=field
                    return <DateView id={name} {...field} {...rest} value={value} selected={value} onChange={val=> setFieldValue(name,val)} />
                }
            }
        </Field>
        <ErrorMessage name={name} component={ErrorText} />      
    </div>
  )
}

export default DatePicker
