import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Dashboard from './components/Dashboard'
import Admins from './components/Admins'
import Login from './components/Login'
import Notification from './components/Shared/Notification'
import NotFound from './components/Shared/NotFound'
import Analysis from './components/Analysis'
import Admin from './components/Admin'
import Cookies from 'js-cookie'
import { useEffect } from 'react'

function App() {
  // const idInToken = localStorage.getItem('id')
  const idInToken = Cookies.get('id')

  return (
    <div className=''>

      <Notification />
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path="/login" element={<Login />} />
          {
            Cookies.get('token') ? (
              // localStorage.getItem('token') !== null || '' ?
              <Route path="/dashboard" element={<Dashboard idInToken={idInToken} />}>
                <Route path="Analysis" element={<Analysis />} />
                <Route path="Admins" element={<Admins idInToken={idInToken} />} />
                <Route path="Admins/admin/:id" element={<Admin idInToken={idInToken} />} />
                {/* <Route path="*" element={<NotFound />} /> */}
              </Route>
            ) : (
              <Route path="/login" element={<Login />} />

              // <Navigate to="/login" />
            )
          }
          < Route path="*" element={<NotFound />} />
        </Routes>

      </Router>

    </div>
  )
}

export default App