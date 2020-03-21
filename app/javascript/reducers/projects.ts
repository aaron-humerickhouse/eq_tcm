import { GET_PROJECTS_FAILURE, GET_PROJECTS_STARTED, GET_PROJECTS_SUCCESS } from '../actions/projects';

export default function projects(state = {}, action): {} {
  switch (action.type) {
    case GET_PROJECTS_STARTED:
      return { ...state, loading: true };
    case GET_PROJECTS_SUCCESS:
      return { ...state, ...action.payload, loading: false, error: null };
    case GET_PROJECTS_FAILURE:
      return { ...state, loading: false, error: action.payload.errorMessage };
    default:
      return state;
  }
}
