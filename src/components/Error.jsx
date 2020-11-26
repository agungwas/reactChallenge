import React from 'react'
import { useSelector } from 'react-redux'

export default function Error (props) {
  const error = useSelector(state => state.error)

  return (
    <React.Fragment>
      <div className="w-100 d-flex justify-content-center">
        <div className="alert alert-danger" role="alert">{error} </div>
      </div>
    </React.Fragment>
  )
}