import './App.css';
import { Box } from '@mui/system';

// section
import Experiences from './section/Experiences';
import Header from './section/Header';
import Skills from './section/Skills';

function App() {
  return (
    <Box className='bg'>
      <Header />
      <Skills />
      <Experiences />
    </Box>
  );
}

export default App;
