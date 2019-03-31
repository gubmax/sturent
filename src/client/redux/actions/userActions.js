import axios from 'axios'
import { API_PREFIX } from '../../../etc/config.json'

const getUser = id => dispatch => (
  axios(`${API_PREFIX}/user/${id}`).then(
    done => dispatch({ type: 'USER_REQUEST_SUCCESS', payload: done.data }),
    error => dispatch({ type: 'USER_REQUEST_FAILURE', error }),
  )
)

export default getUser
