import './App.css';
import { Box } from '@mui/system';

// section
import Header from './section/Header';
import Skills from './section/Skills';

function App() {
  return (
    <Box className='bg'>
      <Header />
      <Skills />
    </Box>
  );
}

export default App;
