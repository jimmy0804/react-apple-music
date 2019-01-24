import React from 'react'
import { Route } from "react-router-dom";
import { RouteConfig } from './RouteConfig'

const RouteWithSubRoutes = (route: RouteConfig) => {
  return (
    <Route
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  )
}

export default RouteWithSubRoutes