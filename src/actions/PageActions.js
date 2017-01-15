import { SET_YEAR } from '../constants/Page'
import { GET_MATCHES } from '../constants/Page'
import axios from 'axios';

/*export function setYear(year) {

  return {
    type: SET_YEAR,
    payload: year
  }
}*/

export function getMatches() {

  axios.get("http://localhost:3000/api/v1/matches.json")
    .then(function(response){
   let mmm = response.data.matches
  });

  return {
    type: GET_MATCHES,
    payload:  [1, 2, 4]
  }  
} 

