import React from 'react'
import './Account.css'
import {} from 'formik'
import LoginPage from './LoginPage'

const Account = () => {
  return (
    <div className='Account-main-containor'>
         <div className='Account-containor'>User Acccount</div>
         <div>
          <LoginPage />
         </div>
    </div>
  )
}

export default Account
