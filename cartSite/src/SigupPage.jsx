import React from 'react'
import './Signup.css'
import {Formik,Form,Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import ErrorText from './ErrorText'
import {useDispatch} from 'react-redux'
import { Adduserdata } from './Store/Slices/UserSlice'

const SigupPage = () => {

    const dispatch=useDispatch()
    const initialValue = {
        username:"",
        email:"",
        password:"",
        confirmpassword:""
    }

    const validationSchema = Yup.object({
        username: Yup.string().required("user name Required !"),
        email: Yup.string().email("Invalid email !").required("required"),
        password: Yup.string().min(8,"Password must be atleast eight letters !")
        .matches(/[a-z]/,"Password must contain atleast a small letter !")
        .matches(/[A-Z]/,"Password must contain atleast a cpital letter !")
        .matches(/[0-9]/,"Password must contain atleast a number !")
        .required("Password required"),
        confirmpassword: Yup.string().oneOf([Yup.ref('password'),null],"Confirm password must similar to password !")
        .required("Required !")
    })

    const onSubmit = values =>{
        console.log("Submitted user info :",values)
        dispatch(Adduserdata(values));
    }
  return (
    <div className='Signup-main-containor'>
        <div className='content-containor'>
        <div className='signup-heading'>Signup</div>
        <div className='Form-containor'>
            <Formik initialValues={initialValue}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}>
                {
                    formik =>{
                        return(
                            <Form className='form-contents'>
                                <div className='input-contaonors'>
                                    <label htmlFor="username">User name</label>
                                    <Field name='username' id='username' />
                                    <ErrorMessage name='username' component={ErrorText} />
                                </div>
                                <div className='input-contaonors'>
                                    <label htmlFor="email">Email</label>
                                    <Field name='email' id='email'/>
                                    <ErrorMessage name='email' component={ErrorText} />
                                </div>
                                <div className='input-contaonors'>
                                    <label htmlFor="password">Password</label>
                                    <Field name='password' id='password'/>
                                    <ErrorMessage name='password' component={ErrorText} />
                                </div>
                                <div className='input-contaonors'>
                                    <label htmlFor="confirmpassword">Confirm psssword</label>
                                    <Field name='confirmpassword' id='confirmpassword'/>
                                    <ErrorMessage name='confirmpassword' component={ErrorText} />
                                </div>
                                <button type="submit" className='signup-btn'>Submit</button>
                                <div className='already-have-account'>Already have an account</div>
                                <Link to='/Account'><button className='login-btn' >Login</button></Link>
                            </Form>
                        )
                    }
                }
            </Formik>

        </div>
        </div>      
    </div>
  )
}

export default SigupPage
