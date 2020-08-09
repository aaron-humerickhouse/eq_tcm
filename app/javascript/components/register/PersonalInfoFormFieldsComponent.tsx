import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface Props extends RouteComponentProps {
  user: any;
  signedIn: boolean;
  handleFieldChange: (key: string, value: string) => void;
}

interface State {
  hidePassword: boolean;
}

class PersonalInfoFormFieldsComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      hidePassword: true,
    };
  }

  toggleShow: () => void = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
  };

  render(): React.ReactNode {
    const { hidePassword } = this.state;
    const { handleFieldChange } = this.props;

    return (
      <React.Fragment>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter first name"
            onChange={e => handleFieldChange('firstName', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter last name"
            onChange={e => handleFieldChange('lastName', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={e => handleFieldChange('email', e.target.value)}
          />
          <Form.Text className="text-muted">We&apos;ll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type={hidePassword ? 'password' : 'text'}
              placeholder="Password"
              onChange={e => handleFieldChange('password', e.target.value)}
            />
            <InputGroup.Append>
              <InputGroup.Text>
                <FontAwesomeIcon onClick={this.toggleShow} icon={hidePassword ? faEye : faEyeSlash} />
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
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

export default connect(mapStateToProps)(PersonalInfoFormFieldsComponent);
