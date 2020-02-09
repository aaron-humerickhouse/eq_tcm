import * as React from 'react';
import { connect } from 'react-redux';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

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
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { signedIn } = this.props;

    return (
      <React.Fragment>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed={'top'}>
          <Navbar.Brand href="/">EQ - Test Case Manager</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {signedIn ? (
                <React.Fragment>
                  <Nav.Link href="/suites">Suites</Nav.Link>
                  <Nav.Link href="/executions">Executions</Nav.Link>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Nav.Link href="/features">Features</Nav.Link>
                  <Nav.Link href="/pricing">Pricing</Nav.Link>
                  <Nav.Link href="/about_us">About Us</Nav.Link>
                </React.Fragment>
              )}
            </Nav>
            <hr />
            <Nav>
              {signedIn === false && <Nav.Link href={'/login'}>Login</Nav.Link>}
              {signedIn === true && <Nav.Link href={'/logout'}>Logout</Nav.Link>}
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
