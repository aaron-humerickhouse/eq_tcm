import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './login/LoginPage';
import LogoutPage from './logout/LogoutPage';
import HomePage from './home/HomePage';
import HeaderComponent from './HeaderComponent';
import { Provider } from 'react-redux';
import Container from 'react-bootstrap/Container';
import { ConnectedRouter } from 'connected-react-router';
import configureStore, { history } from './../configure-store';

interface Props {
  signedIn: boolean;
}

class App extends React.Component<Props> {
  render(): any {
    const store = configureStore({});

    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <React.Fragment>
            <HeaderComponent />
            <Container>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/login" exact component={LoginPage} />
                <Route path="/logout" exact component={LogoutPage} />
              </Switch>
            </Container>
          </React.Fragment>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
