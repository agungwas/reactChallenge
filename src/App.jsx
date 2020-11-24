import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'

export default function App (props) {
  const [login, setLogin] = useState(Boolean(localStorage.getItem('user')))

  const logining = (data) => {
    localStorage.setItem('user', data)
    setLogin(data)
  }

  const logout = () => {
    localStorage.removeItem('user')
    setLogin(false)
  }

  if (!login) return <Login login={logining}></Login>
  else return (<Home logout={logout}/>)
}