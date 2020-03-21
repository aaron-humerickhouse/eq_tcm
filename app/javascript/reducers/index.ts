import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authedUser from './authedUser';
import projects from './projects';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authedUser: authedUser,
    projects: projects,
  });
export default createRootReducer;
