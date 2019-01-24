import React from 'react'
import { Route } from "react-router-dom";
import { RouteConfig } from './RouteConfig'

import SettingsComponent from '../pages/settings/SettingsComponent'
import LibraryComponent from '../pages/library/LibraryComponent'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: LibraryComponent
  },
  {
    path: '/settings',
    component: SettingsComponent
  }
]

export default routes