import React from 'react'
import './ListArray.css'
import {FieldArray,ErrorMessage, Field} from 'formik'

const ListArray = ({label,name,listOptions,...rest}) => {
  return (
    <div className='form-control'>
        <label htmlFor={name}>{label}</label>
      <FieldArray name={name}>
        {
            fieldArrayProps=>{
                const {push,remove,form} = fieldArrayProps
                const {values} =form
                const {qualificationList}=values

                return (
                    <div>
                        {
                            qualificationList.map((o,index)=>(
                                <div key={index} className='qualification-list-containor'>
                                    <Field name={`qualificationList[${index}]`} id={name} className='qualification-list'/>
                                    {
                                        index>0 && <button id={name} onClick={()=>remove(index)} className='remove-btn'>-</button>
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

export default ListArray
