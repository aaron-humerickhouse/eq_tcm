import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import authedUser from './authedUser';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    authedUser: authedUser,
  });
export default createRootReducer;
