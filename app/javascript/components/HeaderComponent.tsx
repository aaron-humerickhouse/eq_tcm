import * as React from "react"
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios"
import { BrowserRouter as Router, Route } from "react-router-dom";

interface Props {
  signedIn: boolean
  loginPath: string,
  logoutPath: string
}

interface State {
  anchorEl: null | HTMLElement
}

class HeaderComponent extends React.Component<Props, State> {
  constructor(props){
    super(props);
    this.state = {
      anchorEl: null
    }
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.setState({anchorEl: event.currentTarget});
  }

  handleClose = () => {
    this.setState({anchorEl: null});
  }

  render () {
    const { signedIn, loginPath, logoutPath } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar>
            <div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>Item 1</MenuItem>
                <MenuItem onClick={this.handleClose}>Item 2</MenuItem>
                <MenuItem onClick={this.handleClose}>Item 3</MenuItem>
              </Menu>
            </div>
            <Typography variant="h6" style={{ flex: 1 }}>
              EQ - Test Case Manager
            </Typography>
            {(signedIn === false) &&
              <Button color="inherit" variant={"outlined"} href={loginPath}>Login</Button>
            }
            {(signedIn === true) &&
              <Button color="inherit" variant={"outlined"} href={logoutPath}>Logout</Button>
            }
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }
}

export default HeaderComponent;

