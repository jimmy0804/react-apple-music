import React from 'react'
import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: 70,
    backgroundColor: 'white',
    borderTop: '1px solid #eee;',
    borderBottom: '1px solid #eee;'
  },
});

const MusicControlBar = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      
    </Grid>
  )
}

export default MusicControlBar
