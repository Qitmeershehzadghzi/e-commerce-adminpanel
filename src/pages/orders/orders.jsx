import React, { useEffect, useState } from 'react'
import './orders.css'
import { backendUrl, currency } from '../../App'
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
  // console.log(orders);
 const statusHandler = async (e, orderId) => {
  try {
    const response = await axios.post(
      backendUrl + '/order/status',
      { orderId, status: e.target.value },
      { headers: { token } }
    );

    console.log(response.data);

    if (response.data.success) {
      await fetchAllOrders();
    }
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Something went wrong");
  }
};


  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-bold mb-6 text-gray-800">Order page</h3>
      <div className="space-y-6">
      {orders.map((order,index)=> {
  return (
    <div key={index} className="flex items-start justify-between p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <img src={assets.parcel_icon} alt="" className="w-12 h-12 mr-4" />
      <div className="flex-1">
      <div className="mb-2">
        {order.items?.map((item,idx)=> {
          if (idx === order.items.length - 1) {
            return (
              <p key={idx} className="text-gray-700">
                {item.name} x {item.quantity} <span className="text-sm text-gray-500">{item.size}</span>
              </p>
            )
          }
          return null
        })}
      <p className="font-semibold text-gray-800">{order.address.firstName + " " +order.address.lastName}</p>
      </div>
      <p className="text-gray-600">{order.address.street +','}</p>
      <p className="text-gray-600">{order.address.City +',' + order.address.State + ',' + order.address.country + ',' + order.address.zipcode}</p>
    <p className="text-gray-600">{order.address.phone}</p>
    </div>
    <div className="text-sm text-gray-700 space-y-1 ml-6">
      <p>Items: <span className="font-medium">{order.items.length}</span></p>
      <p>Method: <span className="font-medium">{order.paymentMethod}</span></p>
      <p>Payment : <span className={order.payment ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>{order.payment ?'Done':'Pending'}</span></p>
      <p>Date: <span className="font-medium">{new Date(order.date).toLocaleDateString()}</span></p>
    </div>
    <p className="text-lg font-bold text-indigo-600 ml-6">{currency}{order.amount}</p>
    <select onChange={(e)=>statusHandler(e ,order._id)}  value={order.status} className="ml-6 p-2 border rounded-lg focus:ring-2 focus:ring-indigo-400">
      <option value="Order Placed">Order Placed</option>
      <option value="Packing">Packing</option>
      <option value="Shipped">Shipped</option>
      <option value="Out of delivery">Out of delivery</option>
      <option value="Delivered">Delivered</option>
    </select>
</div>
  )
})}
      </div>

    </div>
  )
}

export default Orders
