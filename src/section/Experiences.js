import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

// component
import CardContainer from '../component/CardContainer';
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';
import SectionTitle from '../component/SectionTitle';

// data
import ExperiencesData from '../data/ExperiencesData';

// icon
import GradeIcon from '@mui/icons-material/Grade';

// Header section
function Experiences() {
  return (
    <GridContainer>
      <GridItem>
        <SectionTitle>Experiences</SectionTitle>
      </GridItem>
      <GridItem>
        <CardContainer>
          <CardContent>
            <List>
              {ExperiencesData.responsibilities.map((responsibility, index) =>
                <ListItem key={'header-responsibilities-' + index}>
                  <ListItemIcon>
                    <GradeIcon />
                  </ListItemIcon>
                  <ListItemText primary={responsibility} />
                </ListItem>
              )}
            </List>
          </CardContent>
        </CardContainer>
      </GridItem>
      <GridItem>
        <Timeline position='alternate'>
          {ExperiencesData.timeline.map(experience =>
            <TimelineItem key={experience.key}>
              <TimelineOppositeContent sx={{ m: 'auto 0' }} align='right' variant='body2' color='text.secondary'>
                {experience.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  {experience.icon}
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Card>
                  <CardHeader
                    title={experience.header.title}
                    subheader={experience.header.subheader}
                  />
                  {experience.content &&
                    <CardContent>
                      <Typography variant='body2' color='text.secondary'>
                        {experience.content}
                      </Typography>
                    </CardContent>
                  }
                </Card>
              </TimelineContent>
            </TimelineItem>
          )}
        </Timeline>
      </GridItem>
    </GridContainer>
  )
}

export default Experiences;