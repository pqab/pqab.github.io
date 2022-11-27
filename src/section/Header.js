import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import EmailIcon from '@mui/icons-material/Email';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PublicIcon from '@mui/icons-material/Public';
import TerminalIcon from '@mui/icons-material/Terminal';

// component
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';

// Header section
const Header = () => (
  <GridContainer>
    <GridItem>
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
            <Stack direction='column' justifyContent='left' alignItems='flex-start'>
              <Chip className='bg-transparent' icon={<TerminalIcon />} label='7+ years of experiences in Software Engineering' />
              <Chip className='bg-transparent' icon={<PublicIcon />} label='Borned in Hong Kong, Located in Tokyo, Japan' />
              <Chip className='bg-transparent' icon={<FavoriteIcon />} label='Passionate about technology, self-motivated and willing to learn' />
            </Stack>
            <Stack direction='row' spacing={1}>
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
    </GridItem>
  </GridContainer>
);

export default Header;