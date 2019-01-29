import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import SettingsComponent from './settings/SettingsComponent'
import LibraryComponent from './library/LibraryComponent'
import BrowseComponent from './browse/BrowseComponent'
import AccountComponent from './account/AccountComponent'

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/library" component={LibraryComponent} />
      <Route path="/browse" component={BrowseComponent} />
      <Route path="/account" component={AccountComponent} />
      <Route path="/settings" component={SettingsComponent} />
      <Route>
        <Redirect to="/library" />
      </Route>
    </Switch>
  )
}

export default MainRoutes