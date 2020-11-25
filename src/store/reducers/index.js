export default function reducer (state = {
    favourites: []
  }, action) {
  switch (action.type) {

    case 'add':
      if (state.favourites.find(el => el.id === action.data.id)) return { ...state }
      else return {...state, favourites: state.favourites.concat(action.data)}
    
    case 'delete':
      if (state.favourites.find(el => el.id === action.id)) {
        const baru = state.favourites.filter(el => el.id !== action.id)
        return { ...state, favourites: baru}
      } else return state
      break
    default:
      return state
      break;
  }

}