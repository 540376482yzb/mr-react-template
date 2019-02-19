import { LOGINSUCCESS, LOGOUTSUCCESS } from '../actions/auth.action'

const initialState = {
  login: false,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGINSUCCESS:
      return { login: true, error: null }
    case LOGOUTSUCCESS:
      return { login: false, error: null }
    default:
      return state
  }
};