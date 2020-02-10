import * as React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authedUser';

interface Props {
  signedIn: boolean;
  history: any;
  dispatch: any;
}

class LogoutPage extends React.Component<Props> {
  componentDidMount(): void {
    const { signedIn, dispatch } = this.props;

    this.redirectIfLoggedOut();

    if (signedIn) {
      dispatch(logout());
    }
  }

  componentDidUpdate(): void {
    this.redirectIfLoggedOut();
  }

  redirectIfLoggedOut = (): void => {
    const { signedIn, history } = this.props;

    if (!signedIn) {
      history.push('/');
    }
  };

  render(): React.ReactNode {
    return <React.Fragment />;
  }
}

function mapStateToProps({ authedUser }): object {
  return {
    signedIn: !!authedUser.user,
  };
}

export default connect(mapStateToProps)(LogoutPage);
