import React, { useState } from 'react'
import './App.css'
import Header from "./Header.jsx"
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Menu from './Menu.jsx'
import CartView from './CartView.jsx'
import { cartContext } from './ContextCreation.jsx'
import Account from './Account.jsx'
import Services from './Services.jsx'
import AboutUs from './AboutUs.jsx'
import Faq from './FAQ/Faq.jsx'
import {Provider} from 'react-redux'
import {Store} from './Store/Store.js'
import Footer from './Footer.jsx'
import SigupPage from './SigupPage.jsx'
import JobForm from './Job Application Form/JobForm.jsx'
import Contact from './contact.jsx'


const App = () => {
  const [cart,setCart]=useState([]);
  return (
    <div className='App-Main-containor'>
    <Provider store={Store} >
    <cartContext.Provider value={{cart,setCart}}>
    <BrowserRouter>
     <Header />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/Menu' element={<Menu />}/>
      <Route path='/About-us' element={<AboutUs />} />
      <Route path='/Services' element={<Services/>}/>
      <Route path='/CartView' element={<CartView />}/>
      <Route path='/Account' element={<Account/>}/>
      <Route path='/Faq-Page' element={<Faq />} />
      <Route path='/Signup' element={<SigupPage/>}/>
      <Route path='/Job-Form' element={<JobForm />} />
      <Route path='/Contact'  element={<Contact/>}/>
     </Routes>
     <Footer/>
     <footer className='footer'>All right reserved for Me @2024</footer>
    </BrowserRouter>

    </cartContext.Provider>
    </Provider>
    </div>
  )
}

export default App
