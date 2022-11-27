import './App.css';
import Avatar from '@mui/material/Avatar';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TerminalIcon from '@mui/icons-material/Terminal';
import { styled } from '@mui/material/styles';

// data
import Skills from './data/Skills.js'

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.primary.main,
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.secondary.main,
  },
}));

function App() {
  return (
    <Box className='bg'>
      <Grid container p={2} pl={[2, 4, 8]} pr={[2, 4, 8]} spacing={2}>
        <Grid item xs={12}>
          <Card sx={{ width: 1 }}>
            <CardHeader
              avatar={
                <Avatar alt='PQAB' src='./pqab.png' />
              }
              title='Pui Q'
              subheader='Software Engineer'
            />
            <CardContent>
              <Stack spacing={2}>
                <Stack direction='column'
                    justifyContent='left'
                    alignItems='flex-start'
                    spacing={2}>
                  <Chip className='bg-transparent' icon={<TerminalIcon />} label='7+ years of experiences in Software Engineering' />
                  <Chip className='bg-transparent' icon={<PublicIcon />} label='Borned in Hong Kong, Located in Tokyo, Japan' />
                  <Chip className='bg-transparent' icon={<FavoriteIcon />} label='Passionate about technology, self-motivated and willing to learn' />
                </Stack>
                <Stack direction='row' spacing={2}>
                  <Chip label='Java'/>
                  <Chip label='Micronaut'/>
                  <Chip label='Kafka'/>
                  <Chip label='Gradle'/>
                  <Chip label='Jenkins'/>
                  <Chip label='Kubernetes'/>
                </Stack>
              </Stack>
            </CardContent>
            <CardActions>
              <IconButton aria-label='github'>
                <GitHubIcon />
              </IconButton>
              <IconButton aria-label='linkedin'>
                <LinkedInIcon />
              </IconButton>
              <IconButton aria-label='email'>
                <EmailIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Grid container p={2} pl={[2, 4, 8]} pr={[2, 4, 8]} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" color="secondary.main">
            Skills
          </Typography>
        </Grid>
        {Skills.map(skill =>
          <Grid key={skill.key} item xs={12} md={4}>
            <Card sx={{ width: 1 }}>
              <CardHeader
                avatar={skill.header.avatar}
                title={skill.header.title}
              />
              <CardContent>
                <Stack direction='column' spacing={2}>
                  {skill.content.items.map(item =>
                    <Box key={item}>
                      <Box mr={1}>{item.name}</Box>
                      <BorderLinearProgress variant='determinate' value={item.value} />
                    </Box>
                  )}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;
