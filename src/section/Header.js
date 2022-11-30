import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

// component
import CardContainer from '../component/CardContainer';
import GridContainer from '../component/GridContainer';
import GridItem from '../component/GridItem';

// data
import HeaderData from '../data/HeaderData';

// Header section
const Header = () => (
  <GridContainer>
    <GridItem>
      <CardContainer>
        <CardHeader
          avatar={
            <Avatar alt={HeaderData.alt} src='./pqab.png' />
          }
          title={HeaderData.title}
          subheader={HeaderData.subheader}
        />
        <CardContent>
          <Stack spacing={2}>
            <Stack direction='column' justifyContent='left' alignItems='flex-start'>
              {HeaderData.items.map(item =>
                <Chip key={item.key} className='bg-transparent' icon={item.icon} label={item.label} />
              )}
            </Stack>
            <Stack direction='row' spacing={1} sx={{ flexWrap: 'wrap' }}>
              {HeaderData.skills.map(skill =>
                <Box key={skill.key} mb={1}>
                  <Chip label={skill.label} />
                </Box>
              )}
            </Stack>
          </Stack>
        </CardContent>
        <CardActions>
          {HeaderData.contacts.map(contact =>
            <IconButton key={contact.key} aria-label={contact.label} href={contact.link} target='_blank' rel='noopener noreferrer'>
              {contact.icon}
            </IconButton>
          )}
        </CardActions>
      </CardContainer>
    </GridItem>
  </GridContainer>
);

export default Header;