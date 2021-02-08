import React, {useEffect, useState} from 'react';
import {ListeDuMenu} from "./ListeDuMenu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {Avatar, CircularProgress, Tooltip} from "@material-ui/core";
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar/AppBar";
import {useStyles} from "../useStyles";
import {useAuth0} from "@auth0/auth0-react";
import './BarreDeNavigation.css';

export const BarreDeNavigation = (props) => {

    const classes = useStyles();
    const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) {
            loginWithRedirect();
        }
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };


    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={props.handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
                <div className="AppBarContenu">
                    <Typography variant="h6" noWrap className="AppTitre">
                        My Meds!!
                    </Typography>
                    {isLoading && (
                        <CircularProgress />
                    )}
                    {isAuthenticated && (
                        <div className="AppBarIcones">
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <Tooltip title={user.name}>
                                    <Avatar
                                        alt={user.name}
                                        src={user.picture} />
                                </Tooltip>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={()=>{}}>Profile</MenuItem>
                                <MenuItem onClick={() => logout()}>Déconnexion</MenuItem>
                            </Menu>
                        </div>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};