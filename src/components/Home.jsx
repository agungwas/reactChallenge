import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, Link, useLocation } from 'react-router-dom'
import Favourites from './Favourites'
import NewsCard from './NewsCard'
import NewsSummary from './NewsSummary'
import fetching from '../helpers/fetchNews'
import Loading from './Loading'
import del from '../store/actions/delete'

export default function Home (props) {
  const [news, loading, setNews] = fetching('https://test.spaceflightnewsapi.net/api/v2/articles', [])
  const { logout } = props
  const dispatch = useDispatch()
  const location = useLocation()

  const deleteNews = (id, e) => {
    e.preventDefault()
    const newNews = news.filter(el => el.id !== id)
    dispatch(del({id}))
    setNews(newNews)
  }
  if (loading === true) return <Loading></Loading>
  return (
  <React.Fragment>
    <div className="position-fixed w-auto row bg-success shadow rounded p-1 px-2" style={{ top: '1em', right: '1em', zIndex: '100'}}>
      <p className="mx-3 h6 position-relative font-weight-bold mt-2 text-light">Hay, {localStorage.getItem('user')} </p>
      <Link to='/favourites' className="btn btn-info pt-0 m-1">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-bookmark-heart-fill" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M4 0a2 2 0 0 0-2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4zm4 4.41c1.387-1.425 4.854 1.07 0 4.277C3.146 5.48 6.613 2.986 8 4.412z"/>
        </svg>
      </Link>
      <button className="position-relative btn btn-danger pt-0 m-1" onClick={logout}>
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-box-arrow-right" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
          <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
        </svg>
      </button>
    </div>

    <div className="w-100 row no-gutters justify-content-center">
      <Link to='/' className='text-decoration-none' style={{}}>
        <h1 className="display-4 font-weight-bold text-dark">News</h1>
      </Link>
    </div>
    <div className="ml-2 row no-gutters mb-1">
      <Link to='/' className='text-decoration-none' style={{}}>
        <p className="text-muted small">Home</p>
      </Link>
      <p className="text-muted small">&gt;</p>
      <p className="text-muted small">{location.pathname.slice(1)} </p>
    </div>
    <Switch>
        <Route path='/favourites'>
          <Favourites></Favourites>
        </Route>
        <Route path="/:id">
          <NewsSummary></NewsSummary>
        </Route>
        <Route path="/">
          <div className="row row-cols-1 row-cols-md-4 p-2 no-gutters bg-secondary">
            {news.map(el => (
              <NewsCard data={el} deleteNews={deleteNews} key={el.id}/>
            ))}
          </div>
        </Route>
    </Switch>
    
  </React.Fragment>
  )

}