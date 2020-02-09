import { AuthenticationService } from '../services/authedUser';

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginStarted = (): {} => ({
  type: LOGIN_STARTED,
});

export const loginSuccess = (loginData): {} => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...loginData,
  },
});

export const loginFailure = (errorMessage): {} => ({
  type: LOGIN_FAILURE,
  payload: {
    errorMessage,
  },
});

export const login = (username, password): ((dispatch) => void) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch): void => {
    dispatch(loginStarted());
    new AuthenticationService()
      .login(username, password)
      .then(res => {
        dispatch(loginSuccess(res.data));
      })
      .catch(err => {
        dispatch(loginFailure(err.message));
      });
  };
};

export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const logoutStarted = (): {} => ({
  type: LOGOUT_STARTED,
});

export const logoutSuccess = (): {} => ({
  type: LOGOUT_SUCCESS,
});

export const logoutFailure = (errorMessage): {} => ({
  type: LOGOUT_FAILURE,
  payload: {
    errorMessage,
  },
});

export const logout = (): ((dispatch) => void) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch): void => {
    dispatch(logoutStarted());
    new AuthenticationService()
      .logout()
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then(res => {
        dispatch(logoutSuccess());
      })
      .catch(err => {
        dispatch(logoutFailure(err.message));
      });
  };
};
