import { saveUserInfo, clearUserInfo, loadUserInfo } from './localStorage.action';
import { callApi } from './utilities.action';
import constant from '../constant/constant'
import alertify from 'alertifyjs'

export const resetPassword = (username) => async (dispatch) => {
  try {
    await startLoader(dispatch)
    const data = await callApi('forget', 'POST', { username });
    if (data.status === false) {
      throw new Error(data.message);
    }
    await stopLoader(dispatch)
    return data.status
  } catch (error) {
    await stopLoader(dispatch)
  }
}

export const processLogin = (user_login_nfo, history) => async dispatch => {
  clearUserInfo()
  try {
    await startLoader(dispatch)
    //TODO: link to back end
    // const { payload, verify_info } = await callApi('login', 'POST', user_login_nfo)
    // saveUserInfo({ ...payload, ...verify_info })
    await dispatch(loginSuccess())
    await stopLoader(dispatch)
    history.push('/dashboard')
  } catch (err) {
    console.log(err)
    await stopLoader(dispatch)
    dispatch(processLogout(err))
  }
}

export const processLogout = (err) => async (dispatch) => {
  if (err.includes("USER_TOKEN EXPIRED") || err.includes("USER_TOKEN NOT FOUND IN APP") ||
    err.includes("CANNOT FIND VALID TOKEN") || err.includes("TOKEN EXPIRED")) {
    if (processLogout.fired) return
    processLogout.fired = true
    alertify.alert('LOGIN MESSAGE', 'YOUR SESSION HAS EXPIRED.', function () {
      alertify.message('ok');
    });
    dispatch(logoutFromSystem());
  } else if (err.includes('Logging out')) {
    dispatch(logoutFromSystem());
  } else {
    alertify.alert('LOGIN MESSAGE', err.message || err, function () {
      alertify.message('ok');
    });
  }
}

export const logoutFromSystem = () => async (dispatch) => {
  try {
    const user_token = loadUserInfo('user_token')
    if (user_token) {
      const username = loadUserInfo('username')
      await callApi('logout', 'POST', { username })
      clearUserInfo();
      dispatch(logoutSuccess())
      window.location.href = window.location.origin
    }
  } catch (err) {
    console.log(err)
    window.location.href = window.location.origin
  }
}





export const LOGINSUCCESS = 'LOGINSUCCESS'
export const loginSuccess = () => ({
  type: LOGINSUCCESS
})

export const LOGOUTSUCCESS = 'LOGOUTSUCCESS'
export const logoutSuccess = () => ({
  type: LOGOUTSUCCESS
})

const startLoader = (dispatch) => {
  dispatch({
    type: constant.START_LOADING
  })
};

const stopLoader = dispatch => {
  dispatch({
    type: constant.STOP_LOADING
  })
}

const launchSuccess = async (dispatch) => {
  await dispatch({
    type: constant.START_SUCCESS
  })
  setTimeout(() => {
    dispatch({
      type: constant.STOP_SUCCESS
    })
  }, 1000)
}
