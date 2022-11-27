import Grid from '@mui/material/Grid';

const GridContainer = (props) => (
  <Grid item xs={12}>
    {props.children}
  </Grid>
);

export default GridContainer;