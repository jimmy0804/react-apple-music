import React from 'react'
import styled from 'styled-components/macro'
import TabBar from '../components/TabBar'
import MusicControlBar from '../components/MusicControlBar'

const MainSection = styled.main`
  height: 300vh;
`

const BottomSection = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

export interface TabBarLayoutProps {
  children: JSX.Element[] | JSX.Element;
}

const TabBarLayout = (props: TabBarLayoutProps) => {
  return (
    <div>
      <MainSection>
        {props.children}
      </MainSection>
      <BottomSection>
        <MusicControlBar />
        <TabBar />
      </BottomSection>
    </div>
  )
}

export default TabBarLayout
