import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'

import PlaybackMusicDetailView from './PlaybackMusicDetailView'

import {
  PlayArrow,
  Pause,
  RepeatOne,
  Repeat,
  Shuffle,
  FastForward,
  FastRewind
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: 5,
    backgroundColor: 'white',
    borderTop: '1px solid #eee;',
    borderBottom: '1px solid #eee;'
  },
});

const MusicControlBar = () => {
  const classes = useStyles()

  return (
    <Grid container
    className={classes.root}>

      <Grid container xs={8} sm={10}>
        <PlaybackMusicDetailView title="Some title" image="https://upload.wikimedia.org/wikipedia/en/thumb/3/39/Wakerlink.jpg/170px-Wakerlink.jpg"/>
      </Grid>

      <Grid container
      spacing={8} xs={4} sm={2}
      justify="flex-end">
        <Grid item>
          <IconButton aria-label="Play Music">
            <PlayArrow />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton aria-label="Fast Forward">
            <FastForward />
          </IconButton>
        </Grid>
      </Grid>
      
      {/* <Pause />
      <RepeatOne />
      <Repeat />
      <Shuffle />
      <FastForward />
      <FastRewind /> */}
    </Grid>
  )
}

export default MusicControlBar
