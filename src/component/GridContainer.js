import Grid from '@mui/material/Grid';

const GridContainer = (props) => (
  <Grid container p={2} pl={[2, 4, 8]} pr={[2, 4, 8]} spacing={2}>
    {props.children}
  </Grid>
);

export default GridContainer;