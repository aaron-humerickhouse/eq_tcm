import * as React from "react"

interface Props {
}

class NotFoundPage extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <span>Page Not Found</span>
      </React.Fragment>
    );
  }
}

export default NotFoundPage;
