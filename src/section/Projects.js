import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// component
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';
import SectionTitle from '../component/SectionTitle';

// data
import ProjectsData from '../data/ProjectsData'

// Projects section
const Projects = () => (
  <GridContainer>
    <GridItem>
      <SectionTitle>Projects</SectionTitle>
    </GridItem>
    {ProjectsData.map(project =>
      <Grid key={project.key} item xs={12} md={4}>
        <Card sx={{ width: 1 }}>
          <CardHeader
            avatar={project.header.avatar}
            title={project.header.title}
          />
          <CardContent>
            <Typography>
              {project.content.text}
            </Typography>
          </CardContent>
          <CardActions sx={{ flexWrap: 'wrap' }}>
            {project.content.skills.map(skill =>
              <Box key={skill.key} mb={1}>
                <Chip label={skill.label} />
              </Box>
            )}
          </CardActions>
        </Card>
      </Grid>
    )}
  </GridContainer>
);

export default Projects;