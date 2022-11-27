import './App.css';
import { Box } from '@mui/system';

// section
import Experiences from './section/Experiences';
import Header from './section/Header';
import Projects from './section/Projects';
import Skills from './section/Skills';

function App() {
  return (
    <Box className='bg'>
      <Header />
      <Skills />
      <Experiences />
      <Projects />
    </Box>
  );
}

export default App;
