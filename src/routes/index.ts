import { Redirect } from 'react-router-dom'
import { RouteConfig } from './RouteConfig'

import SettingsComponent from '../pages/settings/SettingsComponent'
import LibraryComponent from '../pages/library/LibraryComponent'

const routes: RouteConfig[] = [
  {
    path: '/',
    isExact: true,
    component: LibraryComponent
  },
  {
    path: '/settings',
    isExact: true,
    component: SettingsComponent
  }
]

export default routes