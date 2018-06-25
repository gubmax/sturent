import axios from 'axios'
import { API_PREFIX } from '../../etc/config.json'

export function getUser() {
  return dispatch => {
    return axios(API_PREFIX + '/user/5adb020f4aa5390fc14fa4a1').then(
      done => dispatch({ type: 'USER_REQUEST_SUCCESS', payload: done.data }),
      error => dispatch({ type: 'USER_REQUEST_FAILURE', error }),
    )
  }
}
