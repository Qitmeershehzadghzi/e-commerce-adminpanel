import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='div-1'>
      <NavLink to={'/'}>

      <img className='image-1' src={assets.logo} alt="" />
      </NavLink>
      <button className='but-1'>Logout</button>
    </div>
  )
}

export default Navbar
