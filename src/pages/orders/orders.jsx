import React, { useEffect, useState } from 'react'
import './orders.css'
import { backendUrl } from '../../App'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../assets/admin_assets/assets'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) {
      return null
    }
    try {
      const response = await axios.post(
        backendUrl + '/order/list',
        {},
        { headers: { token } }
      )
      if (response.data.success) {
        setOrders(response.data.data)  // <-- yehi orders aap render kar rahe ho
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  console.log(orders);
  

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>Order page</h3>
      <div>
      {orders.map((order,index)=> {
  return (
    <div key={index}>
      <img src={assets.parcel_icon} alt="" />
      <div>
        {order.items?.map((item,idx)=> {
          if (idx === order.items.length - 1) {
            return (
              <p key={idx}>
                {item.name} x {item.quantity} <span>{item.size}</span>
              </p>
            )
          }
          return null
        })}
      <p>{order.address.firstName + " " +order.address.lastName}</p>
      </div>
      <p>{order.address.street +','}</p>
      <p>{order.address.City +','}</p>
    </div>
  )
})}

      </div>
    </div>
  )
}

export default Orders
