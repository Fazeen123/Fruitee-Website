import React from 'react'
import './ListArray.css'
import {FieldArray,Field} from 'formik'

const ListArray3 = ({label,name,listOptions,...rest}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
      <FieldArray name={name} id={name}>
        {
            fieldArrayProps=>{
                const {push,remove,form} = fieldArrayProps
                const {values} =form
                const {interests}=values

                return (
                    <div>
                        {
                            interests.map((o,index)=>(
                                <div key={index} className='qualification-list-containor'>
                                    <Field id={name} name={`interests[${index}]`} className='qualification-list'/>
                                    {
                                        index>0 && <button  onClick={()=>remove(index)} className='remove-btn'>-</button>
                                    }
                                    <button type="button" onClick={()=>push("")} className='add-btn'>+</button>
                                </div>
                            ))
                        }
                    </div>
                )
                
            }
        }
      </FieldArray>
    </div>
  )
}

export default ListArray3
