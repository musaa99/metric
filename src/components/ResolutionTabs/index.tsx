import * as React from 'react';
import Box from '@mui/material/Box';

import {AntTabs, AntTab } from './style';

export default function ResolutionTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ bgcolor: '#fff' }}>
        <AntTabs value={value} onChange={handleChange} aria-label="resolution tabs">
          <AntTab label="Last Hour" />
          <AntTab label="Today" />
          <AntTab label="Yesterday" />
          <AntTab label="Last 3 Days" />
        </AntTabs>
      </Box>
    </Box>
  );
}
