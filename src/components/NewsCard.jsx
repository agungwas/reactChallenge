import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import add from '../store/actions/add'

export default function Card (props) {
  const dispatch = useDispatch()
  const { path, url } = useRouteMatch()
  const { favourites } = useSelector(s => s)
  const { data, deleteNews } = props
  let ada = false
  
  favourites.forEach(el => {
    if (data.id === el.id) ada = true
  })

  const addToFav = (e, data) => {
    e.preventDefault()
    dispatch(add({data}))
  }

  let deleteIcon = 
  <svg width="2em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bookmark-dash-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm2 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H6z"/>
  </svg>
  if (!path.includes('favourites')) {
    deleteIcon = 
    <svg width="2em" height="1.5em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="red" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
    </svg>
  }
  
  return (
    <React.Fragment>
      <div className="col mb-3 p-2">
        <div className="card shadow rounded">
          <img src={data.imageUrl} alt="" className="card-img-top"/>
          <div className="card-title">
            <p className=" font-weight-bold mt-2" style={{ textAlign: 'center' }}>{data.title} </p>
          </div>
          <div className="card-footer justify-content-between row no-gutters">
            <a className="text-decoration-none" href='' onClick={e=> deleteNews(data.id, e)}>
              {deleteIcon}
            </a>
            <Link to={`/${data.id}`}><button className="btn btn-warning py-0">Detail</button></Link>
            {!url.includes('favourite') && ada === false && <a className="text-decoration-none" href='' onClick={e=> addToFav(e, data)}>
              <svg width="2em" height="1.5em" viewBox="0 0 16 16" className="bi bi-bookmark-plus" fill="#17a2b8" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
              </svg>
            </a>}
            {!url.includes('favourite') && ada === true &&
              <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" fill="green" className="bi bi-bookmark-check-fill" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M2 15.5V2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.74.439L8 13.069l-5.26 2.87A.5.5 0 0 1 2 15.5zm8.854-9.646a.5.5 0 0 0-.708-.708L7.5 7.793 6.354 6.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
              </svg>}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}