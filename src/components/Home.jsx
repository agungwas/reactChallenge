// import Axios from 'axios'
import React from 'react'
import NewsCard from './NewsCard'

export default class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      news: [
        {
            "id": "5fb17398ac89b6001b3041ba",
            "title": "With Resilience, NASA & SpaceX to begin operational Commercial Crew flights",
            "url": "https://www.nasaspaceflight.com/2020/11/crew1-launch/",
            "imageUrl": "https://www.nasaspaceflight.com/wp-content/uploads/2020/11/Crew-1-1-1170x641.jpeg",
            "newsSite": "NASA Spaceflight",
            "summary": "Weather and technology permitting, a SpaceX Falcon 9 rocket is scheduled to lift off from the Kennedy Space Center, Florida, at 19:27 EST on 15 November (00:27 UTC on 16 November) lofting four space travelers into orbit ahead of a planned six month stay aboard the International Space Station.",
            "publishedAt": "2020-11-15T16:00:00.000Z",
            "updatedAt": "2020-11-15T18:29:44.274Z",
            "featured": false,
            "launches": [],
            "events": []
        }
      ]
    }
  }

  componentDidMount () {
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles', { method: 'GET' })
      .then(data => data.json())
      .then(news => {
        this.setState({ news: news })
        console.log(news);
      })
      .catch(response => {
        console.log(response, 'dari error'); 
      })
    // Axios('https://test.spaceflightnewsapi.net/api/v2/articles')
    //   .then(({ data }) => {
    //     this.setState({ news: data })
    //     console.log(data);
    //   })
    //   .catch((response) => {
    //     console.log(response, 'dari error'); 
    //   })
  }

  deleteNews (id) {
    // console.log(id, 'sampai parent');
    const { news } = this.state
    const index = news.findIndex(el => el.id === id)
    news.splice(index, 1)
    this.setState({ news })
    // console.log(this.state.news, 'setelah delete');
  }

  render () {
    const { news } = this.state
    const { logout } = this.props
    return (
      <React.Fragment>
        <div className="position-fixed w-25 row justify-content-around bg-success shadow rounded p-1" style={{ top: '1em', right: '0em', zIndex: '100'}}>
          <p className="h6 position-relative font-weight-bold mt-2 text-light">Hay, {localStorage.getItem('user')} </p>
          <button className="position-relative btn btn-danger" onClick={logout}>Log out</button>

        </div>
        <div className="w-100 row no-gutters justify-content-center">
          <h1 className="display-4 font-weight-bold">News</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-4 p-2 no-gutters bg-secondary">
          {news.map(el => (
            <NewsCard data={el} deleteNews={this.deleteNews.bind(this)} key={el.id}/>
          ))}
        </div>
        
      </React.Fragment>
    )
  }
}