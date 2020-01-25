import * as React from "react"
import {Link} from "react-router-dom";

interface Props {
}

class HomePage extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <span>HomeContainer</span>
        <Link to="/login">Login</Link>
      </React.Fragment>
    );
  }
}

export default HomePage
