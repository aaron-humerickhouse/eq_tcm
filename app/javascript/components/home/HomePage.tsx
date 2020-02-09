import * as React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props extends RouteComponentProps {
  route: string;
  greeting: string;
  authedUser: any;
  signedIn: boolean;
}

class HomePage extends React.Component<Props> {
  UNSAFE_componentWillMount(): void {
    const { history, route } = this.props;

    if (!!route) {
      history.push(`/${route}`);
    }
  }

  render() {
    const { signedIn, authedUser } = this.props;
    return (
      <React.Fragment>
        <span>HomeContainer </span>
        <p>
          {!signedIn && <Link to="/login">Login</Link>}
          {signedIn && <span>Welcome, {authedUser.user.first_name}</span>}
        </p>
      </React.Fragment>
    );
  }
}

function mapStateToProps({ authedUser }, props): object {
  return {
    authedUser: authedUser,
    signedIn: !!authedUser.user,
    route: props.location.search.split('=')[1],
  };
}
export default connect(mapStateToProps)(HomePage);
