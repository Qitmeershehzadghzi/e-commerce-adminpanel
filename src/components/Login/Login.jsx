import React, { useState } from 'react'
import axios from 'axios'
import { backendUrl } from '../../App'
import { toast } from 'react-toastify'
// import navigate from 'react-router-dom'
const Login = ({ setToken }) => {
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    
    try {
      const response = await axios.post(`${backendUrl}user/admin`, {
        email: Email,
        password,
      })
      if (response.data.success) {
        setToken(response.data.token)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log('❌ Error:', error.message)
      toast.error(error.message)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} className="flex flex-col gap-4">
          <div>
            <p className="mb-1 font-medium">Email Address</p>
            <input
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Your@gmail.com"
              required
            />
          </div>

          <div>
            <p className="mb-1 font-medium">Password</p>
            <input
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" 
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
