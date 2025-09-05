import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div>
      <div className='div-1'>
        <NavLink className='navlink-1' to='/add'>
          <img className='imag-1' src={assets.add_icon} alt="" />
          <p className='para-1'>Add Items</p>
        </NavLink>

        <NavLink className='navlink-2' to='/list'>
          <img className='imag-2' src={assets.order_icon} alt="" />
          <p className='para-2'>List Items</p>
        </NavLink>

        <NavLink className='navlink-3' to='/orders'>
          <img className='imag-3' src={assets.order_icon} alt="" />
          <p className='para-3'>Order Items</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
