import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  LibraryMusic,
  MusicNote
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
  },
});

const navActions = [
  {
    label: 'Library',
    icon: <LibraryMusic />
  },
  {
    label: 'Browse',
    icon: <MusicNote />
  }
]

const TabBar = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0)

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      {navActions.map((value, index) => {
        return  <BottomNavigationAction
                  label={value.label}
                  icon={value.icon}
                />
      })}
    </BottomNavigation>
  )
}

export default TabBar
