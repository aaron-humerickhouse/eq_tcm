import * as React from 'react';
import { login } from '../../actions/authedUser';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  handleSubmit = event => {
    const { email, password } = this.state;
    this.props.dispatch(login(email, password));
  };

  handleEmail = event => {
    this.setState({ email: event.target.value });
  };

  handlePassword = event => {
    this.setState({ password: event.target.value });
  };

  handleEnter = event => {
    if (event.key === 'Enter') {
      this.handleSubmit(event);
    }
  };

  render(): any {
    const { authedUser, signedIn, history } = this.props;
    console.log('Props: ', this.props);

    if(signedIn) {
      history.push({
        pathname: '/overview';
      });
    }

    return (
      <React.Fragment>
        <Form>
          {!!authedUser.error && <Alert variant={'danger'}>Invalid Email or Password</Alert>}
          <Form.Group controlId="emailInput">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Email" onChange={this.handleEmail} />
          </Form.Group>
          <Form.Group controlId="passwordInput">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={this.handlePassword}
              onKeyDown={this.handleEnter}
            />
          </Form.Group>
          <Button variant="primary" type="button" onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ loading, authedUser }): object {
  return {
    loading: loading,
    authedUser: authedUser,
    signedIn: !!authedUser.user,
  };
}

export default connect(mapStateToProps)(LoginPage);
