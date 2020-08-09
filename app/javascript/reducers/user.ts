import { REGISTER_USER_FAILURE, REGISTER_USER_STARTED, REGISTER_USER_SUCCESS } from '../actions/user';

export default function user(state = {}, action): {} {
  switch (action.type) {
    case REGISTER_USER_STARTED:
      return { ...state, loading: true };
    case REGISTER_USER_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case REGISTER_USER_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    default:
      return state;
  }
}
