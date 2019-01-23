import React from 'react'
import TabBar from '../components/TabBar';
import MusicControlBar from '../components/MusicControlBar'

const TabBarLayout = () => {
  return (
    <div>
      <div>
        <MusicControlBar />
        <TabBar />
      </div>
    </div>
  )
}

export default TabBarLayout
