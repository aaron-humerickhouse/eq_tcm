import {
  LOGIN_STARTED,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_STARTED,
  LOGOUT_SUCCESS,
} from '../actions/authedUser';

export default function authedUser(state = {}, action): {} {
  switch (action.type) {
    case LOGIN_STARTED:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case LOGIN_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    case LOGOUT_STARTED:
      return { ...state, loading: true };
    case LOGOUT_SUCCESS:
      return { loading: false, error: null };
    case LOGOUT_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    default:
      return state;
  }
}
