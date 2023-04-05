import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import { Grow } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

// icon
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

// component
import CardContainer from '../component/CardContainer';
import ChipContainer from '../component/ChipContainer';
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';
import SectionTitle from '../component/SectionTitle';

// data
import ProjectsData from '../data/ProjectsData'

// Projects section
const Projects = ({show}) => (
  <GridContainer>
    <GridItem>
      <SectionTitle>Projects</SectionTitle>
    </GridItem>
    {ProjectsData.map((project, projectIndex) =>
      <Grow key={project.key}
          in={show}
          style={{ transformOrigin: '0 0 0' }}
          timeout={(projectIndex + 1) * 500}>
        <Grid item xs={12} md={4}>
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
                      <KeyboardArrowRightOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText secondary={item} />
                  </ListItem>
                )}
              </List>
            </CardContent>
            <CardActions sx={{ flexWrap: 'wrap', marginTop: 'auto' }}>
              {project.content.skills.map(skill =>
                <ChipContainer {...skill} />
              )}
            </CardActions>
          </CardContainer>
        </Grid>
      </Grow>
    )}
  </GridContainer>
);

export default Projects;