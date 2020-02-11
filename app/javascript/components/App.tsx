import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import LogoutPage from './logout/LogoutPage';
import HomePage from './home/HomePage';
import HeaderComponent from './HeaderComponent';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './../configure-store';
import NotFoundPage from './not-found/NotFoundPage';
import Cookies from 'js-cookie';
// import {UserService} from "../services/user";

interface Props {
  dispatch: any;
}

class App extends React.Component<Props> {
  // checkForAuth = (): any => {
  //   const jwtToken = Cookies.get('eq_jwt');
  //   if (!jwtToken) {
  //     return;
  //   }
  //   const decodedJwt = jwtDecode(jwtToken);
  //   new UserService()
  //     .getUser(decodedJwt.id)
  //     .then(res => {
  //       return res.data;
  //     })
  //     .catch(err => {
  //       return err.message;
  //     });
  //   debugger;
  // };

  render(): React.ReactChild {
    const store = configureStore({});

    // const store = configureStore({
    //   authedUser: { user: { id: 1, email: 'aaron@example.com', first_name: 'Aaron', last_name: 'Humerickhouse' } },
    // });

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
