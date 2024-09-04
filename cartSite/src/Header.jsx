import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import {FaShoppingCart} from 'react-icons/fa'
import {FaUserCircle,FaBars} from 'react-icons/fa'


const Header = () => {
  const [SideMenu,setSideMenu]=useState(false);
  return (
    <>
    <div className='Main-Containor'>
      <div className='Header-containor' id='header'>
        <div className='logo-containor'><Link to={"/"} className='Shop-logo'>Shop Logo</Link></div>
        <div className='Navbar-containor'>
        <ul className='Navbar'>
            <li>
                <Link to={"/"} className='Nav-item'> Home</Link>
            </li>
            <li>
                <Link to={"/About-us"} className='Nav-item'>About us</Link>
            </li>
            <li>
                <Link to={"/Menu"} className='Nav-item'>Menu</Link>
            </li>
            <li>
                <Link to={"/Services"} className='Nav-item'>Services</Link>
            </li>
            <li>
              <Link to={"/Contact"} className='Nav-item'>Contact</Link>
            </li>
        </ul>
        </div>
        <div className='Nav-bar-right-side'>  
        <ul className='Navbar-right-containor'>
          <li>
          <Link to={"/CartView"} className='Nav-item cart-view-1'><FaShoppingCart className='FaShoppingCart'/>Cart View</Link>
          <Link to={"/CartView"} className='Nav-item Cart-view-2'><FaShoppingCart className='FaShoppingCart'/>Cart </Link>
          </li>
          <li>
            <Link to={"/Account"} className='Nav-item account-btn'><FaUserCircle className='FaUserCircle' />Account</Link>
            <FaBars className='burger-menu-icon' />
          </li>          
        </ul>
        </div>
        <div><FaBars className='burger-menu-icon outter-burger-menu' onClick={()=> setSideMenu(!SideMenu)} /></div>
      </div>
      <div className={SideMenu ? 'Side-menu-containor' : 'hide-SideBar'}   > 
        <ul className='Side-menu'> 
          <Link to={"/"} className='li'  ><li onClick={()=> setSideMenu(!SideMenu)}  >Home</li></Link>
          <Link to={"/About-us"} className='li' ><li onClick={()=> setSideMenu(!SideMenu)} >About Us</li></Link>
          <Link to={"/Menu"} className='li' ><li onClick={()=> setSideMenu(!SideMenu)} >Menu</li></Link>
          <Link to={"/Services"} className='li' ><li onClick={()=> setSideMenu(!SideMenu)} >Services</li></Link>
          <Link  to={"/Contact"} className='li'><li onClick={()=> setSideMenu(!SideMenu)} >Contact</li></Link>         
        </ul>
        <ul className='Side-Menu-2-containor'>
          <li className='Side-menu-2' onClick={()=> setSideMenu(!SideMenu)}>
          <Link to={"/CartView"} className='Nav-item cart-view-1'><FaShoppingCart className='FaShoppingCart'/>Cart View</Link>
          </li>
          <li className='Side-menu-2 Side-menu-2-btn ' onClick={()=> setSideMenu(!SideMenu)}>
          <Link to={"/Account"} className='Nav-item account-btn' ><FaUserCircle className='FaUserCircle' />Account</Link>            
          </li>
        </ul>
      </div>
      </div>  
    </>
  )
}

export default Header
