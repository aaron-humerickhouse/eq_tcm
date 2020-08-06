import { GET_PROJECT_FAILURE, GET_PROJECT_STARTED, GET_PROJECT_SUCCESS } from '../actions/project';

export default function project(state = {}, action): {} {
  switch (action.type) {
    case GET_PROJECT_STARTED:
      return { ...state, loading: true };
    case GET_PROJECT_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_PROJECT_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    default:
      return state;
  }
}
