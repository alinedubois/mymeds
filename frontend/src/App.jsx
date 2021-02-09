import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import {useStyles} from "./useStyles";
import {AppMenu} from "./components/AppMenu";
import {BarreDeNavigation} from "./components/BarreDeNavigation";

export const App = () => {
    const classes = useStyles();
    const [menuOuvertEnModeMobile, setMenuOuvertEnModeMobile] = useState(false);

    const basculerMenu = () => {
        setMenuOuvertEnModeMobile(!menuOuvertEnModeMobile);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <BarreDeNavigation
                basculerMenu={basculerMenu} />
            <AppMenu
                menuOuvertEnModeMobile={menuOuvertEnModeMobile}
                basculerMenu={basculerMenu} />
            <main className={classes.content}>
                <div className={classes.toolbar} />
            </main>
        </div>
    );
}

