import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'
import { Provider } from 'react-redux'
import store from './store'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'

export default function App (props) {
  const [login, setLogin] = useState(Boolean(localStorage.getItem('user')))
  const history = useHistory()

  const logining = (data) => {
    localStorage.setItem('user', data)
    history.push('/')
    setLogin(data)
  }

  const logout = () => {
    localStorage.removeItem('user')
    history.push('/login')
    setLogin(false)
  }

  return (
    <React.StrictMode>
      <Provider store={store}>
        <Switch>
          <Route path="/login">
            {login === true ? 
            <Redirect to="/"/> :
            <Login login={logining} />
          }
          </Route>
          <Route path="/">
            {login === false ? 
            <Redirect to="/login"/> :
            <Home logout={logout}/>
          }
          </Route>
        </Switch>
      </Provider>
    </React.StrictMode>
  )
}