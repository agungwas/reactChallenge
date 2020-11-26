import React, { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from './Loading'
import Error from './Error'
import { fetchingDetail } from '../store'
import { useDispatch, useSelector } from 'react-redux'

export default function NewsSummary (props) {
  const params = useParams()
  const { newsDetail, loading, error } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchingDetail(params.id))
  }, [params.id])

  if (loading) return <Loading/>
  if (error) return <Error/>
  return (
    <div className="shadow shadow-lg rounded bg-gray py-3 px-1">
      <div className="row no-gutters  justify-content-center">
        <div className="h5 font-weight-bolder">{newsDetail.title} </div>
      </div>
      <div className="row p-2 no-gutters">
        <img src={newsDetail.imageUrl} alt="" className="col-5 p-2 img-thumbnail shadow"/>
        <div className="col-7 p-2 px-4">
          <p className="text-muted small">{newsDetail.newsSite} - {new Date(newsDetail.publishedAt).toUTCString()} </p>
          <p className="text">{newsDetail.summary} <a target="#" href={newsDetail.url}>view more</a></p>
          <Link to={`/`}><button className=" btn btn-info btn-sm">Back to Home</button></Link>
        </div>
      </div>
    </div>
  )
}