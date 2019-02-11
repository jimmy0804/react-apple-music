import React from 'react'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
  },
  image: {
    maxWidth: 50,
    maxHeight: 50,
    objectFit: 'contain'
  }
});

export interface PlaybackMusicDetailViewProps {
  image: string;
  title: string;
}

const PlaybackMusicDetailView = (props: PlaybackMusicDetailViewProps) => {
  const classes = useStyles()

  return (
    <Grid container
    spacing={8}
    alignItems="center">
      <Grid container xs={4}
      justify="center"
      alignItems="center">
        <img className={classes.image} src={props.image}/>
      </Grid>
      <Grid container xs={8} direction="column">
        <Typography variant="caption" gutterBottom>
          { props.title }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PlaybackMusicDetailView