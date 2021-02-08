import React, {useEffect, useState} from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useTheme} from '@material-ui/core/styles';
import Menu from "@material-ui/core/Menu/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import './App.css';
import {useAuth0} from "@auth0/auth0-react";
import {Avatar, CircularProgress, Tooltip} from "@material-ui/core";
import {ListeDuMenu} from "./components/ListeDuMenu";
import {useStyles} from "./useStyles";
import {AppMenu} from "./components/AppMenu";
import {BarreDeNavigation} from "./components/BarreDeNavigation";


export const App = (props) => {


    const classes = useStyles();


    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <BarreDeNavigation handleDrawerToggle={handleDrawerToggle}/>
            <AppMenu mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}/>
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}

