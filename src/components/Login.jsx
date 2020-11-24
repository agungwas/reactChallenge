import React, { useEffect, useState } from 'react'

export default function Login (props) {
  const [username, setUsername] = useState('')

  const submitLogin = (e) => {
    e.preventDefault()
    props.login(username)
  }

  const handleInput = (e) => {
    setUsername(e.target.value)
  }

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <div className="card bg-secondary shadow rounded w-25 mb-5 p-3 border-info border-lg">
        <div className="card-title mb-1">
          <p className="h3 text-light" style={{ textAlign: 'center' }}>Enter Username</p>
        </div>
        <div className="card-body pt-1 pb-0">
          <form onSubmit={submitLogin}>
            <input type="text" value={username} className="form-control" onChange={handleInput} placeholder='Your username here'/>
            <input type="submit" className="form-control my-2 btn btn-info mb-2"/>
          </form>
        </div>
      </div>
    </div>
  )

}