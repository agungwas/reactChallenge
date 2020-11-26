import { useState, useEffect } from 'react'

export default function Fetching (url, init) {
  const [data, setData] = useState(init)
  const [loading, setLoading] = useState(false)
  
  useEffect(_=> {
    setLoading(true)
    fetch(url)
      .then(baru => baru.json())
      .then(news => {
        setData(news)
        setLoading(false)
      })
      .catch(response => {
        console.log(response, 'dari error'); 
      })
  }, [])

  return [data, loading, setData]
}