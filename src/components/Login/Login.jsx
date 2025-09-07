import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { backendUrl } from '../../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
  const [Email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(`${backendUrl}/user/admin`, {
        email: Email,   // lowercase backend expect karta hai
        password
      })
if (response.data.success) {
  setToken(response.data.token)
}
else{
  toast.error(response.data.message)
}
    } catch (error) {
      console.log("❌ Error:", error.message)
      toast.error(error.message)
    }
  }

  return (
    <div className='div-4'>
      <div className='div-3'>
        <h1 className='head-1'>Admin panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className='div-1'>
            <p className='para-1'>Email Address</p>
            <input
              className='input-1'
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder='Your@gmail.com'
              required
            />
          </div>

          <div className='div-2'>
            <p className='para-2'>Password</p>
            <input
              className='input-2'
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder='Enter your password'
              required
            />
          </div>

          <button className='but-1' type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
