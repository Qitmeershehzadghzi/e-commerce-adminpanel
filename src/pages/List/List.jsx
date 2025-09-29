import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const List = ({ token }) => {
  const [List, setList] = useState([])

  // Fetch Products
  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + 'product/list')
      if (response.data.success) {
        setList(response.data.productss)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  // Remove Product
  const removeProduct = async (id) => {
    try {
      const response = await axios.delete(`${backendUrl}product/remove/${id}`, {
        headers: { token }
      })

      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="p-4 md:p-6">
      <p className="mb-4 text-lg md:text-xl font-semibold text-gray-800">All Product List</p>

      {/* Table Header (Hidden on Mobile) */}
      <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-3 px-4 bg-gray-100 rounded-lg font-medium text-gray-700">
        <b>Image</b>
        <b>Name</b>
        <b>Category</b>
        <b>Price</b>
        <b className="text-center">Action</b>
      </div>

      {/* Product Rows */}
      <div className="mt-3 flex flex-col gap-3">
        {Array.isArray(List) &&
          List.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-3 bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition border"
            >
              {/* Show First Image from Array */}
              <img
                src={item.images && item.images.length > 0 ? item.images[0] : "/placeholder.png"}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-md border mx-auto md:mx-0"
              />

              {/* Mobile: Show details in stacked layout */}
              <div className="flex flex-col text-center md:text-left">
                <p className="font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500 md:hidden">{item.category}</p>
                <p className="text-sm font-semibold text-green-600 md:hidden">
                  {item.price} {currency}
                </p>
              </div>

              {/* Desktop only fields */}
              <p className="hidden md:block text-gray-600">{item.category}</p>
              <p className="hidden md:block font-semibold text-green-600">
                {item.price} {currency}
              </p>

              <button
                onClick={() => removeProduct(item._id)}
                className="w-fit mx-auto md:mx-0 px-4 py-2 bg-red-500 text-white text-sm rounded-md hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
      </div>
    </div>
  )
}

export default List
