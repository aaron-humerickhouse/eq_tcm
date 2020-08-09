import { User, UserService } from '../services/user';

export const REGISTER_USER_STARTED = 'REGISTER_USER_STARTED';
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE';

const registerUserStarted = (): {} => ({
  type: REGISTER_USER_STARTED,
});

const registeredUserSuccess = (userData: any): any => {
  return {
    type: REGISTER_USER_SUCCESS,
    payload: {
      user: userData,
    },
  };
};

const registeredUserFailure = (errorMessage): {} => ({
  type: REGISTER_USER_FAILURE,
  payload: {
    errorMessage,
  },
});

export const registerUser = (user: User): ((dispatch) => void) => {
  return (dispatch): void => {
    dispatch(registerUserStarted());
    new UserService()
      .register(user)
      .then(res => {
        dispatch(registeredUserSuccess(res.data));
      })
      .catch(err => {
        dispatch(registeredUserFailure(err.message));
      });
  };
};