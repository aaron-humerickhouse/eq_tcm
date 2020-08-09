import { AuthenticationService } from '../services/authedUser';
import { UserService } from '../services/user';
import Cookies from 'js-cookie';
import { PermissionService } from '../services/permission';

export const GET_PERMISSIONS_STARTED = 'GET_PERMISSIONS_STARTED';
export const GET_PERMISSIONS_SUCCESS = 'GET_PERMISSIONS_SUCCESS';
export const GET_PERMISSIONS_FAILURE = 'GET_PERMISSIONS_FAILURE';

const getPermissionsStarted = (): {} => ({
  type: GET_PERMISSIONS_STARTED,
});

const getPermissionsSuccess = (permissionsData): {} => ({
  type: GET_PERMISSIONS_SUCCESS,
  payload: {
    ...permissionsData,
  },
});

const getPermissionsFailure = (errorMessage): {} => ({
  type: GET_PERMISSIONS_FAILURE,
  payload: {
    errorMessage,
  },
});

export const getPermissions = (userId): ((dispatch) => void) => {
  return (dispatch): void => {
    dispatch(getPermissionsStarted());
    new PermissionService()
      .getPermissions(userId)
      .then(res => {
        dispatch(getPermissionsSuccess(res.data));
      })
      .catch(err => {
        dispatch(getPermissionsFailure(err.message));
      });
  };
};

export const LOGIN_STARTED = 'LOGIN_STARTED';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const loginStarted = (): {} => ({
  type: LOGIN_STARTED,
});

const loginSuccess = (loginData): {} => ({
  type: LOGIN_SUCCESS,
  payload: {
    ...loginData,
  },
});

const loginFailure = (errorMessage): {} => ({
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
        dispatch(getPermissions(res.data.user.id));
      })
      .catch(err => {
        dispatch(loginFailure(err.message));
      });
  };
};

export const LOGOUT_STARTED = 'LOGOUT_STARTED';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

const logoutStarted = (): {} => ({
  type: LOGOUT_STARTED,
});

const logoutSuccess = (): {} => ({
  type: LOGOUT_SUCCESS,
});

const logoutFailure = (errorMessage): {} => ({
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
      .then(_ => {
        Cookies.remove('eq_jwt');
        dispatch(logoutSuccess());
      })
      .catch(err => {
        dispatch(logoutFailure(err.message));
      });
  };
};

export const ASSIGN_AUTHED_USER_STARTED = 'ASSIGN_AUTHED_USER_STARTED';
export const ASSIGN_AUTHED_USER_SUCCESS = 'ASSIGN_AUTHED_USER_SUCCESS';
export const ASSIGN_AUTHED_USER_FAILURE = 'ASSIGN_AUTHED_USER_FAILURE';

const assignAuthedUserStarted = (): {} => ({
  type: ASSIGN_AUTHED_USER_STARTED,
});

const assignAuthedUserSuccess = (loginData): {} => ({
  type: ASSIGN_AUTHED_USER_SUCCESS,
  payload: {
    ...loginData,
  },
});

const assignAuthedUserFailure = (errorMessage): {} => ({
  type: ASSIGN_AUTHED_USER_FAILURE,
  payload: {
    errorMessage,
  },
});

export const assignAuthedUser = (userId): ((dispatch) => void) => {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return (dispatch): void => {
    dispatch(assignAuthedUserStarted());
    new UserService()
      .getUser(userId)
      .then(res => {
        dispatch(assignAuthedUserSuccess(res.data));
        dispatch(getPermissions(userId));
      })
      .catch(err => {
        dispatch(assignAuthedUserFailure(err.message));
      });
  };
};
