import * as React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

interface Props {
  signedIn: boolean;
  loginPath: string;
  logoutPath: string;
}

class HeaderComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  render(): React.ReactNode {
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
                  <LinkContainer to={'/overview'}>
                    <Nav.Item>
                      <Nav.Link href={'/overview'}>Overview</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  <LinkContainer to={'/suites'}>
                    <Nav.Item>
                      <Nav.Link href={'/suites'}>Suites</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  <LinkContainer to={'/executions'}>
                    <Nav.Item>
                      <Nav.Link href={'/executions'}>Executions</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <LinkContainer to={'/features'}>
                    <Nav.Item>
                      <Nav.Link href={'/features'}>Features</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  <LinkContainer to={'/pricing'}>
                    <Nav.Item>
                      <Nav.Link href={'/pricing'}>Pricing</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                  <LinkContainer to={'/about_us'}>
                    <Nav.Item>
                      <Nav.Link href={'/about_us'}>About Us</Nav.Link>
                    </Nav.Item>
                  </LinkContainer>
                </React.Fragment>
              )}
            </Nav>
            <hr />
            <Nav>
              {signedIn === false && (
                <LinkContainer to={'/login'}>
                  <Nav.Item>
                    <Nav.Link href={'/login'}>Login</Nav.Link>
                  </Nav.Item>
                </LinkContainer>
              )}
              {signedIn === true && (
                <LinkContainer to={'/logout'}>
                  <Nav.Item>
                    <Nav.Link href={'/logout'}>Logout</Nav.Link>
                  </Nav.Item>
                </LinkContainer>
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
