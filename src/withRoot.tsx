import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import { BrowserRouter as Router } from 'react-router-dom'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './configureElementUITheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const store = configureStore(undefined)

const withRoot = (Component: () => JSX.Element) => {
  const WithRoot = (props: any) => {
    return (
      <Provider store={store}>
        <Router>
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...props} />
          </MuiThemeProvider>
        </Router>
      </Provider>
    )
  }
  return WithRoot
}

withRoot.propTypes = {
  Component: PropTypes.object.isRequired
}

export default withRoot
