import React from 'react'
import styled from 'styled-components/macro'
import TabBar from '../components/TabBar'
import MusicControlBar from '../components/MusicControlBar'


const BottomSection = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`

const TabBarLayout = () => {
  return (
    <div>
      <BottomSection>
        <MusicControlBar />
        <TabBar />
      </BottomSection>
    </div>
  )
}

export default TabBarLayout
