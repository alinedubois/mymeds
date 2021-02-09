import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import {useStyles} from "./useStyles";
import {AppMenu} from "./components/AppMenu";
import {BarreDeNavigation} from "./components/BarreDeNavigation";
import {callApi} from "./api/api";

export const App = () => {
    const classes = useStyles();
    const [menuOuvertEnModeMobile, setMenuOuvertEnModeMobile] = useState(false);

    const basculerMenu = () => {
        setMenuOuvertEnModeMobile(!menuOuvertEnModeMobile);
    };

    const [apiResult, setApiResult] = useState('');

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
                <div>
                    <button onClick={async () => {
                        const result = await callApi({
                            endpoint: '/tags',
                            method: 'GET'
                        });
                        setApiResult(JSON.stringify(result));
                    }}>Call API</button>
                    <span>{apiResult}</span>
                </div>
            </main>
        </div>
    );
}

