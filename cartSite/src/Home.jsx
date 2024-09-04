import React from 'react'
import './Home.css'
import HomeStructure from './HomeStructure'
import SecondHome  from './SecondHome'
import Footer from './Footer'
import FirstHome from './FirstHome'
import ThirdHome from './ThirdHome'
import IntroHome from './IntroHome'
import FourthHome from './FourthHome'

const Home = () => {
  return (<>
    <div className='home-main-containor'>
      <FirstHome/>
      <IntroHome/>
      <SecondHome/>
      <HomeStructure/>
      <ThirdHome/>
      <FourthHome/>
      {/* <Footer/> */}
      
    </div>
    </>
  )
}

export default Home
