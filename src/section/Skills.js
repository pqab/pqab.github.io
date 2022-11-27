import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

// component
import BorderLinearProgress from '../component/BorderLinearProgress'
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';
import SectionTitle from '../component/SectionTitle';

// data
import SkillsData from '../data/SkillsData'

// Skills section
const Skills = () => (
  <GridContainer>
    <GridItem>
      <SectionTitle>Skills</SectionTitle>
    </GridItem>
    {SkillsData.map(skill =>
      <Grid key={skill.key} item xs={12} md={4}>
        <Card sx={{ width: 1 }}>
          <CardHeader
            avatar={skill.header.avatar}
            title={skill.header.title}
          />
          <CardContent>
            <Stack direction='column' spacing={1}>
              {skill.content.items.map(item =>
                <Box key={item.key}>
                  <Box mr={1}>{item.name}</Box>
                  <BorderLinearProgress variant='determinate' value={item.value} />
                </Box>
              )}
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    )}
  </GridContainer>
);

export default Skills;