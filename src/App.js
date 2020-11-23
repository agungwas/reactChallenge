import React from 'react'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home'

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      login: Boolean(localStorage.getItem('user'))
    }
  }

  login (data) {
    console.log(data, 'dari submit');
    localStorage.setItem('user', data)
    this.setState({ login: true })
  }

  componentDidUpdate () {
    const { login } = this.state
    if (login) {
      console.log('sudah login');
    } else {
      console.log('belom login')
    }
  }

  logout () {
    localStorage.removeItem('user')
    this.setState({ login: false })
  }

  render () {
    const { login } = this.state
    if (!login) return <Login login={this.login.bind(this)}></Login>
    else return (<Home logout={this.logout.bind(this)}/>)
  }
}

export default App