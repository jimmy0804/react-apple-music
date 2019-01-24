import React from 'react'
import styled from 'styled-components/macro'
import TabBar from '../components/TabBar'
import MusicControlBar from '../components/MusicControlBar'

import routes from '../routes/index'
import RouteWithSubRoutes from '../routes/RouteWithSubRoutes'

const MainSection = styled.main`
  height: 300vh;
`

const BottomSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

const TabBarLayout = () => {
  return (
    <div>
      <MainSection>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </MainSection>
      <BottomSection>
        <MusicControlBar />
        <TabBar />
      </BottomSection>
    </div>
  )
}

export default TabBarLayout
