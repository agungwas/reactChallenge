import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

export default function Card (props) {
  const { data, deleteNews } = props
  const { path, url } = useRouteMatch()
  
  return (
    <React.Fragment>
      <div className="col mb-3 p-2">
        <div className="card shadow rounded">
          <img src={data.imageUrl} alt="" className="card-img-top"/>
          <div className="card-title">
            <p className=" font-weight-bold mt-2" style={{ textAlign: 'center' }}>{data.title} </p>
          </div>
          <div className="card-footer justify-content-between row no-gutters">
            <button className="btn btn-danger" onClick={_=> deleteNews(data.id)}>Delete</button>
            <Link to={`/${data.id}`}><button className="btn btn-info">Detail</button></Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}