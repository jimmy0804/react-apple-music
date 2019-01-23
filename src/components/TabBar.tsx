import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles';
import { getRandomHash } from '../utils/helper'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {
  LibraryMusic,
  MusicNote,
  AccountCircle,
  Settings
} from '@material-ui/icons';

const useStyles = makeStyles({
  root: {
  },
});

const navActions = [
  {
    id: getRandomHash(),
    label: 'Library',
    icon: <LibraryMusic />
  },
  {
    id: getRandomHash(),
    label: 'Browse',
    icon: <MusicNote />
  },
  {
    id: getRandomHash(),
    label: 'Account',
    icon: <AccountCircle />
  },
  {
    id: getRandomHash(),
    label: 'Settings',
    icon: <Settings />
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
                  key={value.id}
                  label={value.label}
                  icon={value.icon}
                />
      })}
    </BottomNavigation>
  )
}

export default TabBar
