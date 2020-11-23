import React from 'react'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }

  submitLogin (event) {
    event.preventDefault()
    this.props.login(this.state.username)
  }

  handleInput (event) {
    this.setState({
      username: event.target.value
    })
  }

  render () {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="card bg-secondary shadow rounded w-25 mb-5 p-3 border-info border-lg">
          <div className="card-title mb-1">
            <p className="h3 text-light" style={{ textAlign: 'center' }}>Enter Username</p>
          </div>
          <div className="card-body pt-1 pb-0">
            <form onSubmit={this.submitLogin.bind(this)}>
              <input type="text" value={this.state.username} className="form-control" onChange={this.handleInput.bind(this)} placeholder='Your username here'/>
              <input type="submit" className="form-control my-2 btn btn-info mb-2"/>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login