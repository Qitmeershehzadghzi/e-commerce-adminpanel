import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Route, Routes } from 'react-router-dom'
import Add from './pages/Add/Add'
import List from './pages/List/List'
import Orders from './pages/orders/orders'
import Login from './components/Login/Login'
export const backendUrl = import.meta.env.VITE_BACKEND_URL;
const App = () => {
  const [token, setToken] = useState('')

  return (
    <div className='div-1'>
      {
        token === '' ? <Login /> : <>
          <Navbar />
          {/* ❌ Wrong: className={`margin: 0; border:0; ...`} */}
          {/* ✅ Fixed: style={{}} */}
          <hr style={{ margin: 0, border: 0, borderTop: '1px solid #eee' }} />

          {/* ❌ Wrong: className={`display:flex; ...`} */}
          {/* ✅ Fixed: style={{}} */}
          <div style={{ display: 'flex', flex: 1 }}>
            <Sidebar />
            <div className='div-3'>
              <Routes>
                <Route path='/add' element={<Add />} />
                <Route path='/list' element={<List />} />
                <Route path='/orders' element={<Orders />} />
              </Routes>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default App
