import React from 'react'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

const theme = createMuiTheme({
  palette: {
  },
  typography: {
    useNextVariants: true,
  },
})

const withRoot = (Component: () => JSX.Element) => {
  const WithRoot = (props: any) => {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    )
  }
  return WithRoot
}

export default withRoot