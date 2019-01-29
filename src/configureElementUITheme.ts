import { createMuiTheme } from '@material-ui/core/styles'

const configureTheme = createMuiTheme({
  palette: {
    // type: 'dark',
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  props: {
    MuiButtonBase: {
      disableRipple: true, // No more ripple, on the whole application
    }
  }
})

export default configureTheme