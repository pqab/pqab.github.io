import Typography from '@mui/material/Typography';

const SectionTitle = (props) => (
  <Typography variant='h4' color='secondary.main'>
    {props.children}
  </Typography>
);

export default SectionTitle;