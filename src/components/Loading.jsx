import React from 'react'

export default function LoadingComponent (props) {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh'}}>
      <div className="spinner-grow" role="status" style={{ width: '5em', height: '5em' }}> 
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}