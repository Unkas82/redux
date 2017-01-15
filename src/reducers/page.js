import { SET_YEAR } from '../constants/Page'
import { GET_MATCHES } from '../constants/Page'

const initialState = {
  year: 2016,
  photos: [],
  matches: []
}

export default function page(state = initialState, action) {
  console.log(action);

  switch (action.type) {
    //case SET_YEAR:
      //return { ...state, year: action.payload }

     case GET_MATCHES:
      return { ...state, matches: action.payload } 

    default:
      return state;
  }

}