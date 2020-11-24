import React from 'react'

export default function Card (props) {
  const { data, deleteNews } = props
  
  return (
    <React.Fragment>
      <div className="col mb-3 p-2">
        <div className="card shadow rounded">
          <img src={data.imageUrl} alt="" className="card-img-top"/>
          <div className="card-title">
            <p className="h5 font-weight-bold mt-2" style={{ textAlign: 'center' }}>{data.title} </p>
          </div>
          <div className="card-body">
            <p className="">{data.summary} </p>
          </div>
          <div className="card-footer justify-content-between row no-gutters">
            <a target="#" href={data.url}><button className="btn btn-info">view more</button></a>
            <button className="btn btn-danger" onClick={_=> deleteNews(data.id)}>Delete</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}