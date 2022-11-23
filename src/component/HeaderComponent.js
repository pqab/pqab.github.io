import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Avatar alt="PQAB" src="./pqab.png" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Pui
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
