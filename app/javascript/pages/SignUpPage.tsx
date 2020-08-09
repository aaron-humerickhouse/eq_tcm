import * as React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import PersonalInfoFormFieldsComponent from '../components/register/PersonalInfoFormFieldsComponent';
import CompanyInfoFormFieldsComponent from '../components/register/CompanyInfoFormFieldsComponent';
import Row from 'react-bootstrap/cjs/Row';
import Col from 'react-bootstrap/cjs/Col';

interface Props extends RouteComponentProps {
  user: any;
  signedIn: boolean;
}

interface State {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName: string;
}

class SignUpPage extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      companyName: '',
    };
  }

  handleFieldChange: (key: string, value: string) => void = (key: string, value: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    this.setState({ [key]: value });
  };

  render(): React.ReactNode {
    const { user, signedIn } = this.props;

    return (
      <React.Fragment>
        <h2>Sign Up</h2>
        {signedIn && <span>Already registered as {user.email}</span>}
        {!signedIn && (
          <Row>
            <Col lg={6}>
              <Form>
                <CompanyInfoFormFieldsComponent handleFieldChange={this.handleFieldChange} />
                <PersonalInfoFormFieldsComponent handleFieldChange={this.handleFieldChange} />
                <Button variant="primary" type="submit">
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

export default connect(mapStateToProps)(SignUpPage);
