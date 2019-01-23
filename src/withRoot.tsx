import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './configureStore'

import { MuiThemeProvider } from '@material-ui/core/styles'
import theme from './configureElementUITheme'
import CssBaseline from '@material-ui/core/CssBaseline'

const store = configureStore(undefined)

const withRoot = (Component: () => JSX.Element) => {
  const WithRoot = (props: any) => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...props} />
        </Provider>
      </MuiThemeProvider>
    )
  }
  return WithRoot
}

export default withRoot