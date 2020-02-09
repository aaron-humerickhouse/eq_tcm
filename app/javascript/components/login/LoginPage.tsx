import * as React from 'react';
import { login } from '../../actions/authedUser';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import { RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps {
  loading: boolean;
  authedUser: any;
  signedIn: boolean;
  dispatch: any;
}

interface State {
  email: string;
  password: string;
}

class LoginPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { email: null, password: null };
  }

  handleSubmit = (): void => {
    const { email, password } = this.state;
    this.props.dispatch(login(email, password));
  };

  handleEmail = (event): void => {
    this.setState({ email: event.target.value });
  };

  handlePassword = (event): void => {
    this.setState({ password: event.target.value });
  };

  handleEnter = (event): void => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  render(): React.ReactNode {
    const { authedUser, signedIn, history } = this.props;

    if (signedIn) {
      history.push({
        pathname: '/',
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
