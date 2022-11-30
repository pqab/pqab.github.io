import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import { alpha } from '@mui/material';

const Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: indigo[900],
    },
    secondary: {
      main: indigo[50],
    },
    background: {
      paper: alpha(indigo[50], 0.1),
    },
  },
});

export default Theme;
