import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// icon
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

// component
import CardContainer from '../component/CardContainer';
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
        <CardContainer>
          <CardHeader
            avatar={project.header.avatar}
            title={project.header.title}
          />
          <CardContent>
            <Typography>
              {project.content.text}
            </Typography>
            <List>
              {project.content.items.map((item, index) =>
                <ListItem key={project.key + '-' + index}>
                  <ListItemIcon>
                    <ThumbUpAltIcon />
                  </ListItemIcon>
                  <ListItemText secondary={item} />
                </ListItem>
              )}
            </List>
          </CardContent>
          <CardActions sx={{ flexWrap: 'wrap', marginTop: 'auto' }}>
            {project.content.skills.map(skill =>
              <Box key={skill.key} mb={1}>
                <Chip label={skill.label} />
              </Box>
            )}
          </CardActions>
        </CardContainer>
      </Grid>
    )}
  </GridContainer>
);

export default Projects;