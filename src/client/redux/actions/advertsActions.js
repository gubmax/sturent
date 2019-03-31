import axios from 'axios'
import { SERVER_PORT, API_PREFIX } from '../../../etc/config.json'

axios.defaults.baseURL = `http://localhost:${SERVER_PORT}`

export const getAdverts = () => dispatch => (
  axios(`${API_PREFIX}/neighbors`).then(
    done => dispatch({ type: 'ADVERTS_REQUEST_SUCCESS', payload: done.data }),
    error => dispatch({ type: 'ADVERTS_REQUEST_FAILURE', error }),
  )
)

export const getCurrAdvert = id => dispatch => (
  axios(`${API_PREFIX}/neighbors/${id}`).then(
    done => dispatch({ type: 'CURR_ADVERT_REQUEST_SUCCESS', payload: done.data }),
    error => dispatch({ type: 'CURR_ADVERT_REQUEST_FAILURE', error }),
  )
)


export const setCurrAdvert = advert => ({
  type: 'CURR_ADVERT_SET',
  payload: advert,
})

export const removeCurrAdvert = () => ({ type: 'CURR_ADVERT_REMOVE' })
