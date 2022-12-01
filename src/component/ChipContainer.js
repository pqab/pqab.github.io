import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';

const ChipContainer = (props) => (
  <Box mb={1}>
    <Chip label={props.label} />
  </Box>
);

export default ChipContainer;