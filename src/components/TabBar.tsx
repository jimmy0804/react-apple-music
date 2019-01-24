import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types";
import { Route, Link } from 'react-router-dom'
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
  id: string | number;
  label: string;
  icon: JSX.Element;
  path: string;
}

const navActions: NacAction[] = [
  {
    id: 'library',
    label: 'Library',
    icon: <LibraryMusic />,
    path: '/',
  },
  // {
  //   id: getRandomHash(),
  //   label: 'Browse',
  //   icon: <MusicNote />
  // },
  // {
  //   id: getRandomHash(),
  //   label: 'Account',
  //   icon: <AccountCircle />
  // },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    path: '/settings',
  }
]

export interface BottomNavigationActionLinkProps {

}

// const BottomNavigationActionLink = () => {
//   return (
//     <Route
//       path={to}
//       exact={activeOnlyWhenExact}
//       children={({ match }) => (
//         <div className={match ? "active" : ""}>
//           {match ? "> " : ""}
//           <Link to={to}>{label}</Link>
//         </div>
//       )}
//     />
//   );
// }

const TabBar = (props: any) => {
  console.log(props)
  const classes = useStyles()

  const [value, setValue] = useState('/')
  useEffect(() => {
    const startValue = props.location.pathname
    setValue(startValue)
  }, [])

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
          value={navAction.path}
          label={navAction.label}
          icon={navAction.icon}
        />
      ))}
    </BottomNavigation>
  )
}

export default TabBar
