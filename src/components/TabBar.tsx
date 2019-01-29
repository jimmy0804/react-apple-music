import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Link, RouteComponentProps } from 'react-router-dom'
import { withRouter } from "react-router";
import { makeStyles } from '@material-ui/styles';
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

export interface NacAction {
  id: string;
  label: string;
  icon: JSX.Element;
  path: string;
}

const navActions: NacAction[] = [
  {
    id: 'library',
    label: 'Library',
    icon: <LibraryMusic />,
    path: '/library',
  },
  {
    id: 'browse',
    label: 'Browse',
    icon: <MusicNote />,
    path: '/browse'
  },
  {
    id: 'account',
    label: 'Account',
    icon: <AccountCircle />,
    path: '/account'
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    path: '/settings',
  }
]

const TabBar = (props: RouteComponentProps) => {
  const classes = useStyles()

  const initialPath: string = props.location.pathname
  const initialState = navActions.find(value => (
    initialPath.includes(value.path)
  ))
  const [value, setValue] = useState(initialState ? initialState.id : 'library')

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue)
      }}
      showLabels
      className={classes.root}
    >
      {navActions.map(navAction => (
        <BottomNavigationAction
          component={(props: any) => (
            <Link to={navAction.path} {...props} />
          )}
          key={navAction.id}
          value={navAction.id}
          label={navAction.label}
          icon={navAction.icon}
        />
      ))}
    </BottomNavigation>
  )
}

export default withRouter(TabBar)
