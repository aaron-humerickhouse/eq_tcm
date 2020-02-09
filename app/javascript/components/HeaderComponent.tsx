import * as React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

interface Props {
  signedIn: boolean;
  loginPath: string;
  logoutPath: string;
}

interface State {
  anchorEl: null | HTMLElement;
}

class HeaderComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    const { signedIn } = this.props;

    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={'top'}>
          <Navbar.Brand as={Link} to="/">
            EQ - Test Case Manager
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {signedIn ? (
                <React.Fragment>
                  <Nav.Link as={Link} to="/suites" onSelect={() => {}}>
                    Suites
                  </Nav.Link>
                  <Nav.Link as={Link} to="/executions" onSelect={() => {}}>
                    Executions
                  </Nav.Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Nav.Link as={Link} to="/features" onSelect={() => {}}>
                    Features
                  </Nav.Link>
                  <Nav.Link as={Link} to="/pricing" onSelect={() => {}}>
                    Pricing
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about_us" onSelect={() => {}}>
                    About Us
                  </Nav.Link>
                </React.Fragment>
              )}
            </Nav>
            <hr />
            <Nav>
              {signedIn === false && (
                <Nav.Link as={Link} to={'/login'} onSelect={() => {}}>
                  Login
                </Nav.Link>
              )}
              {signedIn === true && (
                <Nav.Link as={Link} to={'/logout'} onSelect={() => {}}>
                  Logout
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }): object {
  return {
    authedUser: authedUser,
    signedIn: !!authedUser.user,
  };
}

export default connect(mapStateToProps)(HeaderComponent);
