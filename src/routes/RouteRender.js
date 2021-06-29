import React from 'react';
import { Route } from "react-router-dom";

const RouteRender = ({path, component, isAutheticate, exact}) => {
  return (
    <Route
      component={component}
      path={path}
      exact={exact}
    />
  );
}

export default RouteRender;