import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from "react-bootstrap/InputGroup";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

interface Props extends RouteComponentProps {
  user: any;
  signedIn: boolean;
}

interface State {
  hidden: boolean;
}

class RegisterPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }

  render(): React.ReactNode {
    const { user, signedIn } = this.props;
    const { hidden } = this.state;

    return (
      <React.Fragment>
        <h2>Register Page</h2>
        {signedIn && <span>Already registered as {user.email}</span>}
        {!signedIn && (
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter first name" />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter last name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <InputGroup>
                <Form.Control type={hidden ? 'password' : 'text'} placeholder="Password" />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <FontAwesomeIcon onClick={this.toggleShow} icon={hidden ? faEye : faEyeSlash} />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }): object {
  return {
    user: authedUser.user,
    signedIn: !!authedUser.user,
  };
}

export default connect(mapStateToProps)(RegisterPage);
