import React from 'react'
import { assets } from '../../assets/admin_assets/assets'
import { NavLink } from 'react-router-dom'

const Navbar = ({ setToken }) => {
  return (
    <div className="flex justify-between items-center bg-white px-6 py-3 shadow-md">
      <NavLink to={'/login'}>
        <img className="w-32" src={assets.logo} alt="" />
      </NavLink>
      <button
        onClick={() => setToken('')}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
