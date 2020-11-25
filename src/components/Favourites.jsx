import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import NewsCard from './NewsCard'

export default function Favourites (props) {
  const favourites = useSelector(state => state.favourites)
  const dispatch = useDispatch()

  const deleteNews = (id, e) => {
    e.preventDefault()
    dispatch({type: 'delete', id})
  }

  if (favourites.length === 0) {
    return (
      <div className="row no-gutters row-cols-1 text-center mt-4">
        <p>Oops, you have any favourites right now.</p>
        <p>add your favourites from <Link to="/" className="text-decoration-none text-dark font-weight-bold">here</Link></p>
      </div>
    )
  }

  return (
    <React.Fragment>
      <div className="h5 row no-gutters px-3">Your Favourites</div>
      <div className="row row-cols-1 row-cols-md-4 p-2 no-gutters bg-secondary">
        {favourites.map(el => (
          <NewsCard data={el} deleteNews={deleteNews} key={el.id}/>
          ))}
      </div>
    </React.Fragment>
  )
}