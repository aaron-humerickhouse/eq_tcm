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
  componentDidMount(): void {
    const { history, route } = this.props;

    if (!!route) {
      history.push(`/${route}`);
    }
  }

  render(): React.ReactNode {
    const { signedIn, authedUser } = this.props;
    return (
      <React.Fragment>
        <span>HomeContainer </span>
        <p>
          {!signedIn && <Link to="/login">Login</Link>}
          {signedIn && <span>Welcome, {authedUser.user.first_name}</span>}
        </p>
        <div className="mt-3 mb-5">
          <h3>Theme colors</h3>
          <div className="p-2 mb-2 bg-primary text-white">.bg-primary</div>
          <div className="p-2 mb-2 bg-secondary text-gray-dark">.bg-secondary</div>
          <div className="p-2 mb-2 bg-success text-white">.bg-success</div>
          <div className="p-2 mb-2 bg-danger text-white">.bg-danger</div>
          <div className="p-2 mb-2 bg-warning text-white">.bg-warning</div>
          <div className="p-2 mb-2 bg-info text-white">.bg-info</div>
          <div className="p-2 mb-2 bg-light text-gray-dark">.bg-light</div>
          <div className="p-2 mb-2 bg-dark text-white">.bg-dark</div>
          <div className="p-2 mb-2 bg-white text-gray-dark">.bg-white</div>
        </div>
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
