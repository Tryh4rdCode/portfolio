import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const navbar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt=""/>
        <ul className='nav-menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>About</a></li>
            <li><a href='#'>Projects</a></li>
            <li><a href='#'>Contact</a></li>
        </ul>     
        <div className='nav-connect'>Connect With Me</div>      
    </div>
  )
}

export default navbar