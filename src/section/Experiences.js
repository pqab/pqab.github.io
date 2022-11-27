import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

// component
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';

// data
import ExperiencesData from '../data/ExperiencesData';

// Header section
const Experiences = () => (
  <GridContainer>
    <GridItem>
      <Timeline position="alternate">
        {ExperiencesData.map(experience =>
          <TimelineItem key={experience.key}>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="body2" color="text.secondary">
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
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {experience.content.text}
                  </Typography>
                </CardContent>
              </Card>
            </TimelineContent>
          </TimelineItem>
        )}
      </Timeline>
    </GridItem>
  </GridContainer>
);

export default Experiences;