import axios from 'axios'
import { API_PREFIX } from '../../etc/config.json'

export function getAdverts() {
  return dispatch => {
    return axios(API_PREFIX + '/rent/adverts').then(
      done => dispatch({ type: 'ADVERTS_REQUEST_SUCCESS', payload: done.data }),
      error => dispatch({ type: 'ADVERTS_REQUEST_FAILURE', error }),
    )
  }
}

export function getCurrAdvert(id) {
  return dispatch => {
    return axios(API_PREFIX + '/neighbors/' + id).then(
      done => dispatch({ type: 'CURR_ADVERT_REQUEST_SUCCESS', payload: done.data }),
      error => dispatch({ type: 'CURR_ADVERT_REQUEST_FAILURE', error }),
    )
  }
}


export const setCurrAdvert = (advert) => ({
  type: 'CURR_ADVERT_SET',
  payload: advert
})

export const removeCurrAdvert = () => ({
  type: 'CURR_ADVERT_REMOVE'
})
