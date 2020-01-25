import * as React from "react";
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from "./login/LoginPage";
import LogoutPage from "./logout/LogoutPage";
import HomePage from "./home/HomePage";
import HeaderComponent from './HeaderComponent'

interface Props {
  signedIn: boolean;
}

class App extends React.Component<Props> {
  render() {
    const {signedIn} = this.props;

    return (
      <Router>
        <React.Fragment>
          <HeaderComponent loginPath={'/login'} logoutPath={'/logout'} signedIn={signedIn} />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/logout" exact component={LogoutPage} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
};

export default App;