import { createTheme } from '@mui/material/styles'
import { green, grey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontFamily: 'Helvetica Neue',
    button: {
      fontSize: '15px',
      textTransform: 'none'
    }
  }
})

export default theme