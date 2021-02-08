import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer/Drawer";
import {ListeDuMenu} from "./ListeDuMenu";
import React, {useState} from "react";
import {useStyles} from "../useStyles";
import {useTheme} from "@material-ui/core";

export const AppMenu = (props) => {

    const { window } = props;
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            <Hidden smUp implementation="css">
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    <ListeDuMenu />
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <ListeDuMenu/>
                </Drawer>
            </Hidden>
        </nav>
    );
};