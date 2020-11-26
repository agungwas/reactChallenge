export default function reducer (state = {
    favourites: [],
    news: [],
    newsDetail: {},
    loading: true,
    error: null
  }, action) {
  switch (action.type) {
    
    case 'SET NEWS': 
      return { ...state, news: action.news }

    case 'SET NEWS DETAIL': 
      return { ...state, newsDetail: action.newsDetail }

    case 'ERROR CLEAR': 
      return { ...state, error: null }

    case 'LOADING START':
      return { ...state, loading: true }
    
    case 'ERROR':
      if (typeof(action.error) === 'object') action.error = action.error.toString()
      return { ...state, error: action.error }

    case 'LOADING END':
      return { ...state, loading: false }

    case 'DELETE FAV':
      if (state.favourites.find(el => el.id === action.id)) {
        const baru = state.favourites.filter(el => el.id !== action.id)
        return { ...state, favourites: baru }
      } else return { ...state }

    case 'add':
      if (state.favourites.find(el => el.id === action.data.id)) return { ...state }
      else return {...state, favourites: state.favourites.concat(action.data)}
    
    case 'delete':
      console.log(action.id, 'sampai kesini');
      const newNews = state.news.filter(el => el.id !== action.id)
      let baru = []
      console.log(newNews);
      if (state.favourites.find(el => el.id === action.id)) {
        baru = state.favourites.filter(el => el.id !== action.id)
      } 
      return { ...state, favourites: baru, news: newNews }
      
    default:
      return state
  }

}