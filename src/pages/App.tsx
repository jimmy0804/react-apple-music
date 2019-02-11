import React from 'react'
import withRoot from '../withRoot'
import TabBarLayout from '../Layouts/TabBarLayout'
import MainRoutes from './MainRoutes'

const App = () => {
  return (
    <TabBarLayout>
      <MainRoutes />
    </TabBarLayout>
  )
}

export default withRoot(App);
