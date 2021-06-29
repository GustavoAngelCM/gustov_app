import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Routes } from './Routes';
import RouteRender from './RouteRender';

const RouterMain = () => {
  return (
    <Router>
      <Switch>
        {
          Routes.map((route, i) => (
            <RouteRender key={i} {...route}/>
          ))
        }
      </Switch>
    </Router>
  );
}

export default RouterMain;