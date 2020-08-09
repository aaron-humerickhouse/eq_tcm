import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authedUser from './authedUser';
import projects from './projects';
import project from './project';
import user from './user';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authedUser: authedUser,
    projects: projects,
    project: project,
    user: user,
  });

export default createRootReducer;
