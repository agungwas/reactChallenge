import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import NewsCard from './NewsCard'
import NewsSummary from './NewsSummary'

export default function Home (props) {
  const [news, setNews] = useState([])
  const { logout } = props

  useEffect(_=> {
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles')
      .then(data => data.json())
      .then(news => {
        setNews(news)
      })
      .catch(response => {
        console.log(response, 'dari error'); 
      })
  }, [])

  const deleteNews = (id) => {
    const newNews = news.filter(el => el.id !== id)
    setNews(newNews)
  }

  return (
    <React.Fragment>
      <div className="position-fixed w-25 row justify-content-around bg-success shadow rounded p-1" style={{ top: '1em', right: '0em', zIndex: '100'}}>
        <p className="h6 position-relative font-weight-bold mt-2 text-light">Hay, {localStorage.getItem('user')} </p>
        <button className="position-relative btn btn-danger" onClick={logout}>Log out</button>

      </div>
      <div className="w-100 row no-gutters justify-content-center">
        <h1 className="display-4 font-weight-bold">News</h1>
      </div>
      <Switch>
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