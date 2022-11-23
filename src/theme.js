import { createTheme } from '@mui/material/styles';
import { indigo, blueGrey } from '@mui/material/colors';
import { alpha } from "@mui/material";

const Theme = createTheme({
  palette: {
    primary: {
      main: indigo[900],
      transparent: alpha(indigo[50], 0.5),
      text: indigo[50]
    },
    secondary: {
      main: blueGrey[900],
    },
  },
});

export default Theme;
