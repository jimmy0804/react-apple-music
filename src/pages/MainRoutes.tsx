import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import SettingsComponent from './settings/SettingsComponent'
import LibraryComponent from './library/LibraryComponent'

const MainRoutes = () => {
  return (
    <Switch>
      <Route exact path="/library" component={LibraryComponent} />
      <Route exact path="/settings" component={SettingsComponent} />
      <Route>
        <Redirect to="/library" />
      </Route>
    </Switch>
  )
}

export default MainRoutes