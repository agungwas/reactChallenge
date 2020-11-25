import React, { useState, useEffect } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'

export default function NewsSummary (props) {
  const params = useParams()
  const history = useHistory()
  const [data, setData] = useState('')
  // const [loading, setLoading] = useState(false)
  // const { News, deleteNews } = props
  useEffect(() => {
    // setLoading(true)
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles/'+params.id)
      .then(oneNews => oneNews.json())
      .then(newsobj => {
        setData(newsobj)
        // setLoading(false)
      })
      .catch(response => {
        console.log(response, 'dari error'); 
      })
  }, [params.id])

  // if (loading) return <div>Tunggu</div>

  return (
    <div className="shadow shadow-lg rounded bg-gray py-3 px-1">
      <div className="row no-gutters  justify-content-center">
        <div className="h5 font-weight-bolder">{data.title} </div>
      </div>
      <div className="row p-2 no-gutters">
        <img src={data.imageUrl} alt="" className="col-5 p-2 img-thumbnail shadow"/>
        {/* <div className="col-1 row justify-content-center">
          <div className=" w-25 h-100 text-light shadow rounded">
            ;
          </div>
        </div> */}
        <div className="col-7 p-2 justify-content-around">
          <p className="text-muted small">{data.newsSite} - {new Date(data.publishedAt).toUTCString()} </p>
          <p className="text">{data.summary} <a target="#" href={data.url}>view more</a></p>
          <Link to={`/`}><button className="btn btn-info btn-sm">Back to Home</button></Link>
        </div>
      </div>
    </div>
  )
}

