import React from 'react'
import Input from './input';
import RadioButton from './RadioButton';
import DatePicker from './DatePicker';
import Select from './Select';
import ListArray from './ListArray';
import CheckBox from './CheckBox';
import TextField from './TextField';
import ListArray2 from './ListArray2';
import ListArray3 from './ListArray3';

const FormControl = ({control,...rest}) => {
    
      switch (control) {
        case 'input':
            return <Input {...rest}/> 
            break;
        case 'radio':
            return <RadioButton {...rest}/>
            break;
        case 'date':
            return <DatePicker {...rest}/>
            break;
        case 'select':
            return <Select  {...rest}/>
            break;
        case 'listArray':
            return <ListArray {...rest} />
            break;
        case 'checkbox':
            return <CheckBox {...rest}/>
            break;
        case 'textarea':
            return <TextField {...rest}/>
            break;
        case 'listArray2':
            return <ListArray2 {...rest} />
            break;
        case 'listArray3':
            return <ListArray3  {...rest}/>
            break;
        default:
            return null;
      }
    
  
}

export default FormControl
