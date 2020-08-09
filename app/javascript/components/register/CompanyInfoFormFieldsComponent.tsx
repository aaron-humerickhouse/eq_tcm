import * as React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { RouteComponentProps } from 'react-router-dom';
import ImageUploadComponent from '../ImageUploadComponent';

interface Props extends RouteComponentProps {
  handleFieldChange: (key: string, value: string) => void;
}

class CompanyInfoFormFieldsComponent extends React.Component<Props> {
  render(): React.ReactNode {
    const { handleFieldChange } = this.props;

    return (
      <React.Fragment>
        <Form.Group controlId="formCompany">
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company"
            onChange={e => handleFieldChange('companyName', e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formLogo">
          <Form.Label>Logo</Form.Label>
          <br />
          <ImageUploadComponent />
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

export default connect(mapStateToProps)(CompanyInfoFormFieldsComponent);
