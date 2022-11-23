import LanguageData from '../data/LanguageData.js';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function LanguageComponent() {
  const component = LanguageData.map(language =>
    <Box key={language.key} p={2}>
      <Typography component="legend">{language.name}</Typography>
      <Rating name={language.name} value={language.value} />
    </Box>
  );
  return component;
}
