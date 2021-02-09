import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {App} from "./App";
import {Auth0Provider} from "@auth0/auth0-react";

ReactDOM.render(
      <Auth0Provider
          domain="dev-mymeds.eu.auth0.com"
          clientId="CudqgI5NIfKsEo7fEersJiDBF85FInOp"
          redirectUri="http://localhost:3000"
      >
        <Router>
          <Switch>
            <Route path="/">
              <App />
            </Route>
          </Switch>
        </Router>
      </Auth0Provider>
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
