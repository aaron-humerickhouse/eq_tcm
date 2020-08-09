import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import LogoutPage from '../pages/LogoutPage';
import HomePage from '../pages/HomePage';
import HeaderComponent from './HeaderComponent';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './../configure-store';
import NotFoundPage from '../pages/NotFoundPage';
import Cookies from 'js-cookie';
import ProjectPage from '../pages/ProjectPage';
import RegisterPage from '../pages/RegisterPage';
import SignUpPage from "../pages/SignUpPage";
// import {UserService} from "../services/user";

interface Props {
  dispatch: any;
}

class App extends React.Component<Props> {
  render(): React.ReactChild {
    const store = configureStore({});

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <HeaderComponent />
            <Container>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/login" component={LoginPage} />
                <Route exact path="/logout" component={LogoutPage} />
                <Route exact path="/projects/:id" component={ProjectPage} />
                <Route exact path="/register" component={RegisterPage} />
                <Route exact path="/sign_up" component={SignUpPage} />
                <Route exact path="/404" component={NotFoundPage} />
                <Redirect from="*" to="/404" />
              </Switch>
            </Container>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
