import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import Cookies from 'js-cookie';

class LoginPage extends React.Component {
  handleSubmit = event => {
    const csrfToken = Cookies.get('CSRF-TOKEN');
    console.log(csrfToken);
    axios
      .post('http://localhost:3000/api/v1/login.json', null, {
        headers: {
          'X-CSRF-Token': csrfToken,
        },
        auth: {
          username: 'aaron@example.com',
          password: 'Test1234',
        },
      })
      .then(response => {
        console.log(response);
      });
  };

  render(): any {
    return (
      <React.Fragment>
        <Container>
          <Paper>
            <Container>
              <form noValidate autoComplete="off">
                <div>
                  <TextField required id="email-input" label="Email" />
                </div>
                <div>
                  <TextField
                    required
                    id="password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                  />
                </div>
                <div>
                  <Button variant={'outlined'} color={'primary'} onClick={this.handleSubmit}>
                    Login
                  </Button>
                </div>
              </form>
            </Container>
          </Paper>
        </Container>
      </React.Fragment>
    );
  }
}

export default LoginPage;
