import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, Router } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import BusinessIcon from '@material-ui/icons/Business';
import PersonIcon from '@material-ui/icons/Person';
const drawerWidth = 240;
const styles = {
    root: {
        display: 'flex',
      },
        menuButton: {
      marginRight: 'auto'
    },
    appBar: {
        width: `calc(100% - ${140}px)`,
        marginLeft: drawerWidth,
      },  
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
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

                <AppBar position="fixed" className={classes.appBar}>
                    <IconButton className={classes.menuButton} color="inherit">
                         Menu
                    </IconButton> 
                </AppBar>
                <Drawer open={this.state.toggle} anchor="left" variant="permanent" className={classes.drawer}>
                <CssBaseline/>
                <br/>
                <br/>
                <br/>
                <br/>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/dashboard">
                    <DashboardIcon/>
                        Dashboard
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/post">
                    <ForumIcon/>
                        Community
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/notification">
                    <NotificationsIcon/>
                        Notification
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/company">
                    <BusinessIcon/>
                        Company
                    </Link>
                </MenuItem>
                <MenuItem onClick={this.handleDrawerToggle}>
                    <Link component={RouterLink} to="/mypage">
                    <PersonIcon/>
                        MyPage
                    </Link>
                </MenuItem>

                </Drawer>
                {/* </Router> */}
            </div>
        );
    }
}

export default withStyles(styles)(Appshell);

