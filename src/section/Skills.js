import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import { Grow } from '@mui/material';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/system';

// component
import BorderLinearProgress from '../component/BorderLinearProgress';
import CardContainer from '../component/CardContainer';
import ChipContainer from '../component/ChipContainer';
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
        <CardContainer>
          <CardHeader
            avatar={skill.header.avatar}
            title={skill.header.title}
          />
          <CardContent>
            <Stack direction='column' spacing={1}>
              {skill.content.items.filter(item => item.value > 50).map(item =>
                <Box key={item.key}>
                  <Box mr={1}>{item.name}</Box>
                  <Grow in={true} style={{ transformOrigin: '0 0 0' }} timeout={1500}>
                    <BorderLinearProgress variant='determinate' value={item.value} />
                  </Grow>
                </Box>
              )}
            </Stack>
          </CardContent>
          <CardActions sx={{ flexWrap: 'wrap', marginTop: 'auto' }}>
            {skill.content.items.filter(item => item.value <= 50).map(item =>
              <ChipContainer label={item.name} />
            )}
          </CardActions>
        </CardContainer>
      </Grid>
    )}
  </GridContainer>
)

export default Skills;