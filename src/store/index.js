import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers'
import thunk from 'redux-thunk'

export function fetchingDetail (url) {
  return dispatch => {
    dispatch({ type: 'ERROR CLEAR'})
    dispatch({ type: 'LOADING1 START'})
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles/' + url)
      .then(baru => {
        if (baru.status !== 200) throw baru.statusText
        return baru.json()
      })
      .then(newsDetail => dispatch({ type: 'SET NEWS DETAIL', newsDetail }))
      .catch(error => {
        if (error === 'Internal Server Error') error = "Spacenews With id '" + url + "' Was Not Found!"
        dispatch({ type: 'ERROR', error })
      })
      .finally(() => dispatch({ type: 'LOADING1 END' }))
  } 
}

export function fetching () {
  return dispatch => {
    dispatch({ type: 'ERROR CLEAR'})
    dispatch({ type: 'LOADING START'})
    fetch('https://test.spaceflightnewsapi.net/api/v2/articles/')
      .then(res => {
        if (res.status !== 200) throw res.statusText
        return res.json()
      })
      .then(news => dispatch({ type: 'SET NEWS', news }))
      .catch(error => dispatch({ type: 'ERROR', error}))
      .finally(_=> dispatch({ type: 'LOADING END'}))
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store