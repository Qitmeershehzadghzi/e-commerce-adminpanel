import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/admin_assets/assets'

const Sidebar = () => {
  return (
    <div className="h-screen bg-gray-900 text-white w-56 flex flex-col py-6 px-4 shadow-lg">
      <NavLink
        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800"
        to="/add"
      >
        <img className="w-6" src={assets.add_icon} alt="" />
        <p>Add Items</p>
      </NavLink>

      <NavLink
        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800"
        to="/list"
      >
        <img className="w-6" src={assets.order_icon} alt="" />
        <p>List Items</p>
      </NavLink>

      <NavLink
        className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-gray-800"
        to="/orders"
      >
        <img className="w-6" src={assets.order_icon} alt="" />
        <p>Order Items</p>
      </NavLink>
    </div>
  )
}

export default Sidebar
