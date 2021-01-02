import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  PrivateRoute,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import {App} from "./App";
import {Login} from "./components/Login";
import {Fragment} from "react";

const ApplicationCompteur = () => {
  const [compteur, setCompteur] = React.useState(1);

  return (<Fragment>
    <h1>{compteur}</h1>
    <button
        onClick={() => {setCompteur(cpt=> cpt+1)}}>incrementer</button>
  </Fragment>);
};

ReactDOM.render(
    <ApplicationCompteur/>
  /*<React.StrictMode>
    <Router>
      <Switch>
        <Route exact={true} path={"/login"}>
          <Login/>
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>     
    </Router>
    
  </React.StrictMode>*/
    ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
