import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/orders/orders'
import Login from './components/Login/Login'
  import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
export const currency = 'PKR'
const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'')
useEffect(()=>{
localStorage.setItem('token',token)
},[token])
  return (
    <div className='div-1'>
      <ToastContainer />
      {
        token === '' ? <Login setToken={setToken}/> : <>
          <Navbar setToken ={setToken} />
          {/* ❌ Wrong: className={`margin: 0; border:0; ...`} */}
          {/* ✅ Fixed: style={{}} */}
          <hr style={{ margin: 0, border: 0, borderTop: '1px solid #eee' }} />

          {/* ❌ Wrong: className={`display:flex; ...`} */}
          {/* ✅ Fixed: style={{}} */}
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <div className='div-3'>
              <Routes>
                {/* <Route path='/' element/> */}
                <Route path='/add' element={<Add token={token} />} />
                <Route path='/list' element={<List token={token} />} />
                <Route path='/orders' element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
