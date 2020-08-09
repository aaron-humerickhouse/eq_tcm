import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PersonalInfoFormFieldsComponent from '../components/register/PersonalInfoFormFieldsComponent';
import Col from 'react-bootstrap/cjs/Col';
import Row from 'react-bootstrap/cjs/Row';
import { registerUser } from '../actions/user';

interface Props extends RouteComponentProps {
  user: any;
  signedIn: boolean;
  dispatch: any;
}

interface State {
  hidden: boolean;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

class RegisterPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      hidden: true,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    };
  }

  handleFieldChange: (key: string, value: string) => void = (key: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.setState({ [key]: value });
  };

  submitForm = () => {
    const { firstName, lastName, email, password } = this.state;
    const { dispatch } = this.props;

    dispatch(
      registerUser({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      }),
    );
  }

  render(): React.ReactNode {
    const { user, signedIn } = this.props;

    return (
      <React.Fragment>
        <h2>Register Page</h2>
        {signedIn && <span>Already registered as {user.email}</span>}
        {!signedIn && (
          <Row>
            <Col lg={6}>
              <Form>
                <PersonalInfoFormFieldsComponent handleFieldChange={this.handleFieldChange} />
                <Button variant="primary" type="submit" onClick={this.submitForm}>
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
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
