import Card from '@mui/material/Card';

const CardContainer = (props) => (
  <Card sx={{
      width: 1,
      minHeight: 1,
      display: 'flex',
      flexDirection: 'column'
    }}>
    {props.children}
  </Card>
);

export default CardContainer;