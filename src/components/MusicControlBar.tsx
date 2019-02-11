import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

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
    height: 60,
    backgroundColor: 'white',
    borderTop: '1px solid #eee;',
    borderBottom: '1px solid #eee;'
  },
});

const MusicControlBar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Grid container xs={8}>
        <Grid item xs={3}>
        </Grid>
        <Grid item xs>
        </Grid>
      </Grid>
      <Grid container xs={4}>
        <Grid
        item xs
        justify="center"
        alignItems="center">
          <IconButton aria-label="Play Music">
            <PlayArrow />
          </IconButton>
        </Grid>
        <Grid
        item xs
        justify="center"
        alignItems="center">
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
