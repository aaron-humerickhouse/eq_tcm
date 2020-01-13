import * as React from "react"
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'

interface Props {
  greeting: string
}

class HelloWorld extends React.Component<Props> {
  render () {
    return (
      <React.Fragment>
        <Button color={'primary'} variant={"outlined"}>
          <MenuIcon />
          Greeting: {this.props.greeting}
        </Button>
      </React.Fragment>
    );
  }
}

export default HelloWorld
