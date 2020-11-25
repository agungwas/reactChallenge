import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import fetching from '../helpers/fetchNews'
import Loading from './Loading'

export default function NewsSummary (props) {
  const params = useParams()
  const [data, loading, setData] = fetching('https://test.spaceflightnewsapi.net/api/v2/articles/'+params.id,
  { 
    newsSite: '', 
    url: '', 
    publishedAt: new Date(), 
    summary: '',
    imageUrl: ''
  })

  useEffect(() => {
    fetch()
      .then(oneNews => oneNews.json())
      .then(newsobj => {
        setData(newsobj)
      })
      .catch(response => {
        console.log(response, 'dari error'); 
      })
  }, [params.id])

  if (loading) return <Loading/>
  return (
    <div className="shadow shadow-lg rounded bg-gray py-3 px-1">
      <div className="row no-gutters  justify-content-center">
        <div className="h5 font-weight-bolder">{data.title} </div>
      </div>
      <div className="row p-2 no-gutters">
        <img src={data.imageUrl} alt="" className="col-5 p-2 img-thumbnail shadow"/>
        <div className="col-7 p-2 px-4">
          <p className="text-muted small">{data.newsSite} - {new Date(data.publishedAt).toUTCString()} </p>
          <p className="text">{data.summary} <a target="#" href={data.url}>view more</a></p>
          <Link to={`/`}><button className=" btn btn-info btn-sm">Back to Home</button></Link>
        </div>
      </div>
    </div>
  )
}