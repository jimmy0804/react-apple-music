import React from 'react'
import withRoot from '../withRoot'
import MusicControlBar from '../components/MusicControlBar'

const App = () => {
  return (
    <React.Fragment>
      <MusicControlBar />
    </React.Fragment>
  )
}

export default withRoot(App);
