import './App.css';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/system';

// component
import HeaderComponent from './component/HeaderComponent.js'
import LanguageComponent from './component/LanguageComponent.js'

function App() {
  return (
    <Box color="primary.main" className="bg" height='100vh'>
      <HeaderComponent></HeaderComponent>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box bgcolor="primary.transparent" height="80vh" p={2}>
            <Grid container>
              <Avatar alt="PQAB" src="./pqab.png" />
              <Card variant="outlined">
                <LanguageComponent />
              </Card>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          right
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
