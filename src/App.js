import { useState } from "react";
import './App.css';
import { Box } from '@mui/system';

// component
import Scroller from './component/Scroller';

// section
import Experiences from './section/Experiences';
import Header from './section/Header';
import Projects from './section/Projects';
import Skills from './section/Skills';

function App() {
  const [showExperiences, setShowExperiences] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  return (
    <Box className='bg'>
      <Scroller
          trackIds={['experiences', 'projects']}
          onScrollToElement={(el) => {
            if (el.id === 'experiences' && !showExperiences) {
              setShowExperiences(true);
            }
            if (el.id === 'projects' && !showProjects) {
              setShowProjects(true);
            }
          }}
        >
        <Header id='header' />
        <Skills id='skills' />
        <Experiences id='experiences' show={true} />
        <Projects id='projects' show={true} />
      </Scroller>
    </Box>
  );
}

export default App;
