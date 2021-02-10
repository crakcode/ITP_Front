import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, Router } from 'react-router-dom';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
      marginRight: 'auto'
    },
};

class Appshell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({toggle: !this.state.toggle})
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
            {/* <Router> */}

                <AppBar position="static">
                    <IconButton className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                        <MenuIcon/>
                        Menu
                    </IconButton>
                </AppBar>
                <Drawer open={this.state.toggle}>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/employees">
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/post">
                        Post
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/community">
                        Community
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/company">
                        Company
                    </Link>
                </MenuItem>
                </Drawer>
                {/* </Router> */}
            </div>
        );
    }
}

export default withStyles(styles)(Appshell);

